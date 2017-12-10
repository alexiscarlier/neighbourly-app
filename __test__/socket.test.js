import Socket from '../src/socket.js';
import { Server } from 'mock-socket';

const eeMock = {
  emit: jest.fn(),
  removeListener: jest.fn(),
  on: jest.fn()
};

const mockServer = new Server("ws://localhost:4000");
const testSocket = new Socket(new WebSocket("ws://localhost:4000"), eeMock);

describe("Socket", () => {
  describe("#open", () => {
    test("emits 'connect' message when WebSocket connects", (done) => {
      mockServer.on('connection', server => {
        mockServer.send(JSON.stringify({name: "message name", data: "message data"}));
      });
      setTimeout(() => {
        expect(eeMock.emit.mock.calls[0][0]).toBe('connect');
        mockServer.stop(done);
      }, 100);
    });
  });
  describe("#close", () => {
    test("emits 'disconnect' message when WebSocket closes", (done) => {
      testSocket.ws.close();
      setTimeout(() => {
        expect(eeMock.emit.mock.calls[2][0]).toBe('disconnect');
        mockServer.stop(done);
      }, 1000);
    });
  })
  describe("#message", () => {
    test("emits message name and data payload", () => {
      expect(eeMock.emit.mock.calls[1][0]).toBe('message name');
      expect(eeMock.emit.mock.calls[1][1]).toBe('message data');
    });
  });
  describe("#on", () => {
    test("calls event handler with correct message", () => {
      testSocket.on("message", "handler");
      expect(eeMock.on.mock.calls[0][0]).toBe('message');
      expect(eeMock.on.mock.calls[0][1]).toBe('handler');
    });
  });
  describe("#off", () => {
    test("calls event handler with correct message", () => {
      testSocket.off("message", "handler");
      expect(eeMock.removeListener.mock.calls[0][0]).toBe('message');
      expect(eeMock.removeListener.mock.calls[0][1]).toBe('handler');
    });
  });
  describe("#emit", () => {
    test("emits message from client to WebSocket", () => {
      testSocket.ws.send = jest.fn();
      testSocket.emit("message", {data: "data"});
      expect(testSocket.ws.send.mock.calls[0][0]).toBe('{"name":"message","data":{"data":"data"}}');
    });
  });
});

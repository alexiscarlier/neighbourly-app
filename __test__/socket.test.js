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
  test("#open and #message", (done) => {
    mockServer.on('connection', server => {
      mockServer.send(JSON.stringify({name: "message name", data: "message data"}));
    })

    setTimeout(() => {
      expect(eeMock.emit.mock.calls[0][0]).toBe('connect')
      expect(eeMock.emit.mock.calls[1][0]).toBe('message name')
      expect(eeMock.emit.mock.calls[1][1]).toBe('message data')
      mockServer.stop(done);
    }, 100);
  });
  describe("#on", () => {
    test("calls event handler with correct message", () => {
      testSocket.on("message", "handler");
      expect(eeMock.on.mock.calls[0][0]).toBe('message');
      expect(eeMock.on.mock.calls[0][1]).toBe('handler');
    });
  });
});

import Socket from '../src/socket.js';
import { Server } from 'mock-socket';

const eeMock = {
  emit: jest.fn(),
  removeListener: jest.fn(),
  on: jest.fn()
};

const mockServer = new Server("ws://localhost:4000");

describe("Socket", () => {
  test("#open and #message", (done) => {
    const testSocket = new Socket(new WebSocket("ws://localhost:4000"), eeMock);
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
});

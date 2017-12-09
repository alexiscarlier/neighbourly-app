import Socket from '../src/socket.js';
import { Server } from 'mock-socket';

const eeMockWithJests = {
  emit: jest.fn(),
  removeListener: jest.fn(),
  on: jest.fn()
};

const mockServer = new Server("ws://localhost:4000");

describe("Socket", () => {
  test("#open and #message", (done) => {
    const testSocket = new Socket(new WebSocket("ws://localhost:4000"), eeMockWithJests);
    mockServer.on('connection', server => {
      mockServer.send(JSON.stringify({name: "message name", data: "message data"}));
    })

    setTimeout(() => {
      expect(eeMockWithJests.emit.mock.calls[0][0]).toBe('connect')
      expect(eeMockWithJests.emit.mock.calls[1][0]).toBe('message name')
      expect(eeMockWithJests.emit.mock.calls[1][1]).toBe('message data')
      mockServer.stop(done);
    }, 200);
  });
});

import React, { Component } from 'react';
import Login from '../src/Login';
import ShallowRenderer from 'react-test-renderer/shallow';
import { WebSocket } from 'mock-socket';
global.WebSocket = WebSocket;

describe("<Login />", () => {
  describe("#render", () => {
    test("renders a div element", () => {
      const renderer = new ShallowRenderer();
      renderer.render(<Login />)
      const result = renderer.getRenderOutput();
      expect(result.type).toBe('div');
    });
  });
});

import React, { Component } from 'react';
import Login from '../src/Login';
import ShallowRenderer from 'react-test-renderer/shallow';
import { WebSocket } from 'mock-socket';
global.WebSocket = WebSocket;

describe("<Login />", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Login />);
  const result = renderer.getRenderOutput();


  describe("#render", () => {
    test("renders a div element", () => {
      expect(result.type).toBe('div');
    });

    test("renders a form element", () => {
      expect(result.props.children.type).toBe('form');
    });
  });
});

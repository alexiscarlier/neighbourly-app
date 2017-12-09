import React, { Component } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from '../src/App.js';

describe("<App />", () => {
  test("renders a form for user to sign up", () => {
      const renderer = new ShallowRenderer();
      renderer.render(<App />);
      const result = renderer.getRenderOutput();
      expect(result.type).toBe('div')
  })
})

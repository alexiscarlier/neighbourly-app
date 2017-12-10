import React, { Component } from 'react';
import App from '../src/App'
import ShallowRenderer from 'react-test-renderer/shallow';


const renderer = new ShallowRenderer();
renderer.render(<App />);
const result = renderer.getRenderOutput();

describe("<App />", () => {
  test("renders <Signup />", () => {
    expect(result.type).toBe('div');
  })
})
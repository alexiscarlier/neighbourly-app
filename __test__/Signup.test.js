import React, { Component } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Signup from '../src/Signup';

describe("<Signup />", () => {
  test("renders a form for user to sign up", () => {
      const renderer = new ShallowRenderer();
      renderer.render(<Signup />);
      const result = renderer.getRenderOutput();
      console.log(result)
      expect(result.props.children.type).toBe('form')
  })
})
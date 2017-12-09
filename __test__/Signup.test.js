import React, { Component } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Signup from '../src/Signup';
import TestUtils from 'react-dom/test-utils';

describe("<Signup />", () => {
  test("renders a form for user to sign up", () => {
      const renderer = new ShallowRenderer();
      renderer.render(<Signup />);
      const result = renderer.getRenderOutput();
      expect(result.props.children.type).toBe('form')
  })
  test("form contains ", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Signup />);
    const render = renderer.getRenderOutput();
    const result = render.props.children.props["children"][0]
    expect(result).toContain('Please enter your address')
  })
  test("onChange() is called upon changing the text field", () => {
    const value = "Makers Academy"
    const onChange = jest.fn()
    const input = TestUtils.renderIntoDocument(<Signup onChange={onChange} value={value}/>)
    expect(onChange.called).toBeTruthy
    expect(input.props.value).toEqual(value)
  })
})
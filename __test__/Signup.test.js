import React, { Component } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Signup from '../src/Signup';
import TestUtils from 'react-dom/test-utils';

describe("<Signup />", () => {
  test("renders a form for user to sign up", () => {
      const renderer = new ShallowRenderer();
      renderer.render(<Signup />);
      const result = renderer.getRenderOutput();
      expect(result.props.children.type).toBe('form');
  });
  test("form contains ", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Signup />);
    const render = renderer.getRenderOutput();
    const result = render.props.children.props["children"][0];
    expect(result).toContain('Please enter your address');
  });
  test('should not be call onSubmit when submitting empty form', () => {
  const onSubmit = jest.fn();
  const wrapper = shallow(<Signup onSubmit={onSubmit}/>);
  const result = wrapper.find('input').last();
  result.simulate('submit')
  expect(onSubmit).not.toHaveBeenCalled()
  });
  test('#onChange', () => {
    const wrapper = mount(<Signup/> );
    wrapper.find('#postcode').get(0).props.onChange({target: {name: "postcode", value: "12345"}})
    expect(wrapper.state().postcode).toBe('12345');
  })
  test('#onSubmit', () => {
    const userSignUp = jest.fn()
    const wrapper = shallow(<Signup userSignUp={userSignUp}/> );
    const preventDefault = jest.fn()
    wrapper.find('form').first().simulate('submit', {preventDefault})
    expect(preventDefault).toHaveBeenCalled();
    expect(userSignUp).toHaveBeenCalled();
  })
});

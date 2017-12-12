import React, { Component } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Signup from '../src/Signup';

const window = {geolocate: jest.fn()}
global.window = window;
const renderer = new ShallowRenderer();
describe("<Signup />", () => {
  renderer.render(<Signup />);
  test("renders a form for user to sign up", () => {    
      const result = renderer.getRenderOutput();
      expect(result.props.children.type).toBe('form');
  });

  test("form contains expected content ", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Signup />);
    const render = renderer.getRenderOutput();
    const result = render.props.children.props["children"][0];
    expect(result).toEqual(<h1>Sign-Up</h1>);
  });

  test('should not be call onSubmit when submitting empty form', () => {
  const onSubmit = jest.fn();
  const wrapper = shallow(<Signup onSubmit={onSubmit}/>);
  const result = wrapper.find('input').last();
  result.simulate('submit')
  expect(onSubmit).not.toHaveBeenCalled()
  });

  // describe('#onChange', () => {
  //   test('updates state attributes', () => {
  //     const wrapper = mount(<Signup/> );
  //     console.log( wrapper.find('#postal_code').get(0))
  //     wrapper.find('#postal_code').get(0).props.onChange({target: {name: "postcode", value: "12345"}})
  //     expect(wrapper.state().postcode).toBe('12345');
  //   });
  // });

  describe('#onSubmit', () => {
    test('it prevents the page from reloading and calls userSignUp function', () => {
      const userSignUp = jest.fn()
      const wrapper = mount(<Signup userSignUp={userSignUp}/> );
      const preventDefault = jest.fn()
      wrapper.find('form').first().simulate('submit', {preventDefault})
      expect(preventDefault).toHaveBeenCalled();
      expect(userSignUp).toHaveBeenCalled();
    });
  });
});

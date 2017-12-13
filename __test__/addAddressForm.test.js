import React, { Component } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import AddAddressForm from '../src/AddAddressForm';

const renderer = new ShallowRenderer();
renderer.render(<AddAddressForm />);

describe("<AddAddressForm />", () => {
  test('renders a form for a user to add an address to a feed', () => {
    const result = renderer.getRenderOutput();
    expect(result.props.children.type).toBe('form');
  });

  test("form contains expected content ", () => {
    const render = renderer.getRenderOutput();
    const result = render.props.children.props["children"][0]
    expect(result.props.type).toEqual("text");
  });

  test('should not be call onSubmit when submitting empty form', () => {
  const onSubmit = jest.fn();
  const wrapper = shallow(<AddAddressForm onSubmit={onSubmit}/>);
  const result = wrapper.find('input').last();
  result.simulate('submit')
  expect(onSubmit).not.toHaveBeenCalled()
  });

});

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
    console.log('-------------------------')
    console.log(render.props.children.props.children.props.type)
    const result = render.props.children.props.children
    expect(result.props.type).toEqual("text");
  });
});

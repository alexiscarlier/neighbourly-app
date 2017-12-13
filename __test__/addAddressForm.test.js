import React, { Component } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import AddAddressForm from '../src/AddAddressForm';

const renderer = new ShallowRenderer();

describe("<AddAddressForm />", () => {
  test('renders a form for a user to add an address to a feed', () => {
    const result = renderer.getRenderOutput();
    expect(result.props.children.type).toBe('form');
  });
});

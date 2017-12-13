import React, { Component } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import AddAddressForm from '../src/AddAddressForm';
import FeedAddress from '../src/feedAddress';

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


  describe('#addFeedAddress', () => {
    test('it prevents the page from reloading and calls addFeedAddress function', () => {
      const addFeedAddress = jest.fn()
      const wrapper = shallow(<AddAddressForm addFeedAddress={addFeedAddress}/> );
      const preventDefault = jest.fn()
      wrapper.find('form').first().simulate('submit', {preventDefault})
      expect(preventDefault).toHaveBeenCalled();
      expect(addFeedAddress).toHaveBeenCalled();
    });
  });

});

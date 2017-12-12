import React, { Component } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FeedForm from '../src/feedForm';

const window = {geolocate: jest.fn()}
global.window = window;
const renderer = new ShallowRenderer();

describe("<FeedForm />", () => {
  renderer.render(<FeedForm />);
  test("renders a form for user to create a new feed", () => {    
      const result = renderer.getRenderOutput();
      expect(result.props.children.type).toBe('form');
  });

  test("form contains expected content ", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<FeedForm />);
    const render = renderer.getRenderOutput();
    const result = render.props.children.props["children"][0];
    expect(result.props.type).toEqual("text");
  });

  test('should not be call onSubmit when submitting empty form', () => {
  const onSubmit = jest.fn();
  const wrapper = shallow(<FeedForm onSubmit={onSubmit}/>);
  const result = wrapper.find('input').last();
  result.simulate('submit')
  expect(onSubmit).not.toHaveBeenCalled()
  });

  describe('#addFeed', () => {
    test('it prevents the page from reloading and calls addFeed function', () => {
      const addFeed = jest.fn()
      const wrapper = mount(<FeedForm addFeed={addFeed}/> );
      const preventDefault = jest.fn()
      wrapper.find('form').first().simulate('submit', {preventDefault})
      expect(preventDefault).toHaveBeenCalled();
      expect(addFeed).toHaveBeenCalled();
    });
  });
});

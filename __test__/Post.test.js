import React, { Component } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Post from '../src/Post';

describe("<Post />", () => {
  test("it renders post title and text", () => {
      const wrapper = mount(<Post title="Missing Cats" text="Fluffy, cute and missing. $1M reward!"/>)
      const result = wrapper.instance();
      expect(result.props.title).toEqual('Missing Cats');
      expect(result.props.text).toEqual("Fluffy, cute and missing. $1M reward!");
  });
  test("it renders a div", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Post title="Missing Cats" text="Fluffy, cute and missing. $1M reward!"/>);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
    expect(result.props.children[0].type).toBe('div')
    expect(result.props.children[1].type).toBe('div')
  });
});

import React, { Component } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Post from '../src/Post';

describe("<Post />", () => {
  test("it renders post title", () => {
      const wrapper = mount(<Post title="Missing Cats" text="Fluffy, cute and missing. $1M reward!"/>)
      const result = wrapper.instance();
      console.log(result);
      expect(result.props.title).toEqual('Missing Cats');
      expect(result.props.text).toEqual("Fluffy, cute and missing. $1M reward!");
  });
});

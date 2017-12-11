import React, { Component } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Post from '../src/Post';

describe("<Post />", () => {
  test("it renders post title", () => {
      const renderer = new ShallowRenderer();
      renderer.render(<Post title="Missing Cats"/>);
      const result = renderer.getRenderOutput();
      expect(result.type).toBe('div');
      expect(result.props.children).toEqual([
        "Post title: ", "Missing Cats"]);
  });
});

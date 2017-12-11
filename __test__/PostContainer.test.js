import React, { Component } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Post from '../src/Post';
import PostContainer from '../src/PostContainer';

const renderer = new ShallowRenderer();
renderer.render(<PostContainer />);
const result = renderer.getRenderOutput();


describe("<PostContainer />", () => {
  test("renders <Posts />", () => {
    expect(result.type).toBe('div');
  })
})
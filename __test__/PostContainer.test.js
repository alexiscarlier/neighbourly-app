import React, { Component } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Post from '../src/Post';
import PostContainer from '../src/PostContainer';


const posts = [
  {
    ID: 1,
    createdAt: 1234275648395,
    name: "Missing Cat",
    text: "Mittens is missing again",
    feedID: "1"
  },
  {
    ID: 2,
    createdAt: 1234275648675,
    name: "Missing Dog",
    text: "Buster is missing too",
    feedID: "1"
  }];

  const renderer = new ShallowRenderer();
  renderer.render(<PostContainer posts={posts}/>);
  const result = renderer.getRenderOutput();

describe("<PostContainer />", () => {
  test("renders <Posts />", () => {
    expect(result.type).toBe('div');
    expect(result.props.children[0]).toEqual(<Post key={0} createdAt={1234275648395} text="Mittens is missing again" title="Missing Cat" />);
    expect(result.props.children[1]).toEqual(<Post key={1} createdAt={1234275648675} text="Buster is missing too" title="Missing Dog" />);
  })
})

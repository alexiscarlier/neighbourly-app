import React, { Component } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Post from '../src/Post';

const renderer = new ShallowRenderer();
renderer.render(<Post title="Missing Cats" text="Fluffy, cute and missing. $1M reward!" createdAt={1234275648395}/>);
const result = renderer.getRenderOutput();


describe("<Post />", () => {
  test("it renders a div", () => {
    expect(result.type).toBe('div');
    expect(result.props.children[0].type).toBe('div')
    expect(result.props.children[1].type).toBe('div')
  });
  test("it renders post title and text", () => {
    console.log(result);
    console.log(result.props.children[1]);
    const children = result.props.children
    expect(children[0].props.children).toEqual([
      'Post title: ', 'Missing Cats', ' Post date: ', 'Tue Feb 10 2009'
    ])
    expect(children[1].props.children).toEqual([
      "Post: ", "Fluffy, cute and missing. $1M reward!"
    ])
  });
});

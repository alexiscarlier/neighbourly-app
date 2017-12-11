import React, { Component } from 'react';
import Login from '../src/Login';
import ShallowRenderer from 'react-test-renderer/shallow';
import { WebSocket } from 'mock-socket';
global.WebSocket = WebSocket;

describe("<Login />", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Login />);
  const result = renderer.getRenderOutput();


  describe("#render", () => {
    test("renders a div element", () => {
      expect(result.type).toBe('div');
    });

    test("renders a form element", () => {
      expect(result.props.children.type).toBe('form');
    });

    test("form contains expected content ", () => {
      const header = result.props.children.props.children[0];
      expect(header).toEqual(<h1>Log in</h1>);
    });
  });

  // describe("#OnSubmit", () => {
  //
  // });
  //
  describe('#onChange', () => {
    test('updates state attributes', () => {
      const wrapper = mount(<Login/> );
      wrapper.find('#email').get(0).props.onChange({target: {name: "email", value: "makers@makersacademy.com"}})
      expect(wrapper.state().email).toBe('makers@makersacademy.com');
    });
  });
});

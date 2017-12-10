import React, { Component } from 'react';
import App from '../src/App'
import ShallowRenderer from 'react-test-renderer/shallow';
import { WebSocket } from 'mock-socket';
global.WebSocket = WebSocket;
import Socket from '../src/socket.js';



const connected = "";
const activeFeed = null;
const renderer = new ShallowRenderer();
renderer.render(<App connected={connected} activeFeed={activeFeed}/>);
const result = renderer.getRenderOutput();
const wrapper = mount(<App />);

describe("<App />", () => {
  describe("#render", () => {
    test("renders a div element", () => {
      expect(result.type).toBe('div');
    })   
  })
  describe("#onConnect", () => {
    test("sets connected state to true", () => {
      expect(wrapper.state("connected")).toBe(false);      
      wrapper.instance().onConnect();
      expect(wrapper.state("connected")).toBe(true);
      wrapper.instance().onDisconnect();      
    })
    test("calls #emit", () => {
      const spy = jest.spyOn(Socket.prototype, 'emit');
      wrapper.instance().onConnect();
      expect(spy).toHaveBeenCalled();      
      wrapper.instance().onDisconnect();            
    })
  })
  describe("#onDisconnect", () => {
    test("it resets state", () => {
      expect(wrapper.state("connected")).toBe(false);      
      wrapper.instance().onConnect();
      expect(wrapper.state("connected")).toBe(true);
      wrapper.instance().onDisconnect();
      expect(wrapper.state("connected")).toBe(false);
    })
  })
})
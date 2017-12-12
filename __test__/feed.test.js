import React, { Component } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Feed from '../src/Feed';

const feed = { name: "Makers Academy"}
const wrapper = shallow(<Feed feed={feed}/>);

describe("<Feed />", () => {
    test("it renders welcome message", () => {
        expect(wrapper.instance().props.feed.name).toEqual("Makers Academy");
    });
});

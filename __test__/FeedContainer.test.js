import React, { Component } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FeedContainer from '../src/FeedContainer';
import Feed from '../src/Feed';


describe("<FeedContainer />", () => {
    test("renders <Feed /> if feeds not empty", () => {
        const renderer = new ShallowRenderer();
        const feeds = [{address: "Makers Academy"}];
        renderer.render(<FeedContainer feeds={feeds}/>);
        const result = renderer.getRenderOutput();
        expect(result.type).toBe('div');
        expect(result.props.children).toEqual(<Feed postcode="Makers Academy" />)
    });
});

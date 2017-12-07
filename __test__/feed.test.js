import React, { Component } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Feed from '../src/Feed'


describe("<Feed />", () => {
    test("it renders welcome message", () => {
        const renderer = new ShallowRenderer();
        renderer.render(<Feed name="Alfonso"/>);
        const result = renderer.getRenderOutput();

        expect(result.type).toBe('div');
        expect(result.props.children).toEqual([
           "Welcome, ",  "Alfonso",  "! Your feed..."
        ])
    })
})
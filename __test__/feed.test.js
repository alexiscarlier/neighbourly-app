import React, { Component } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Feed from '../src/Feed'

describe("<Feed />", () => {
    test("it renders welcome message", () => {
        const renderer = new ShallowRenderer();
        renderer.render(<Feed address="Makers Academy"/>);
        const result = renderer.getRenderOutput();
        expect(result.type).toBe('div');
        expect(result.props.children).toEqual([
           "Welcome to the feed for...",  "Makers Academy"
        ])
    })
})

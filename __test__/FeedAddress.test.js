import React, { Component } from 'react';
import FeedAddress from '../src/feedAddress';
import ShallowRenderer from 'react-test-renderer/shallow';
import AddAddressForm from '../src/AddAddressForm'


const feedAddresses = [
  {address:{
    streetNumber:1,
    streetName:"Makers Street",
    postcode:"AL74BD"
  }}
]
  
const renderer = new ShallowRenderer();
renderer.render(<FeedAddress feedAddresses={feedAddresses}/>);
const result = renderer.getRenderOutput();

describe("<FeedAddress />", () => {
  test("renders <AddAddressForm />", () => {
    expect(result.type).toBe('div');
    expect(result.props.children[0]).toEqual(<p>Here are the addresses that can see the active feed</p>)
  })
})

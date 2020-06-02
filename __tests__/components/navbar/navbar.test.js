import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import Navbar from '../../../components/navbar/navbar';

const createNavbar = props => render(<Navbar props={props}/>);

describe('layout component', async assert => {
  {
    const $ = createNavbar();

    assert({
      given: 'nothing',
      should: 'render navbar element',
      actual: $('.navbar').length,
      expected: 1
    });
  }
});
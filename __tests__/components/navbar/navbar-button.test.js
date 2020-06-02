import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import NavbarButton from '../../../components/navbar/navbar-button';

const createButton = props => render(<NavbarButton props={props}/>);

describe('navbar-button component', async assert => {
  {
    const $ = createButton();

    assert({
      given: 'nothing',
      should: 'render navbar-button element',
      actual: $('.navbar-button').length,
      expected: 1
    });
  }
});
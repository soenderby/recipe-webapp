import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import NavbarButton from '../../../components/navbar/navbar-button';

const createButton = (label='') => render(<NavbarButton label={label}/>);

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

  {
    const $ = createButton();

    assert({
      given: 'a label',
      should: 'render button-label element',
      actual: $('.button-label').length,
      expected: 1
    });
  }

  {
    const $ = createButton('label');

    assert({
      given: 'a label',
      should: 'render text in button-label',
      actual: $('.button-label').html().trim(),
      expected: 'label'
    });
  }
});
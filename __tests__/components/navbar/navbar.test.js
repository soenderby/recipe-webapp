import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import Navbar from '../../../components/navbar/navbar';
import { createButton } from '../../testUtils/navbar-factories';

const createNavbar = ({ buttons = [] }) => render(<Navbar buttons={buttons}/>);

describe('navbar component', async assert => {
  {
    const $ = createNavbar([]);

    assert({
      given: 'nothing',
      should: 'render navbar element',
      actual: $('.navbar').length,
      expected: 1
    });
  }

  {
    const $ = createNavbar({ buttons:[
      createButton()
    ]});

    assert({
      given: 'a single button',
      should: 'render a single navbar-button element',
      actual: $('.navbar-button').length,
      expected: 1
    });
  }

  {
    const $ = createNavbar({ buttons: [
      createButton(),
      createButton(),
      createButton()
    ]});

    assert({
      given: 'a list of buttons',
      should: 'render correct number of navbar-button elements',
      actual: $('.navbar-button').length,
      expected: 3
    });
  }
});
import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import Home from '../../pages/index';

describe('renderComponent', async assert => {
  const $ = render(<Home/>);

  assert({
    given: 'some jsx',
    should: 'render markup',
    actual: $('.foo').html().trim(),
    expected: 'Welcome to the Recipe Webapp!'
  });
});
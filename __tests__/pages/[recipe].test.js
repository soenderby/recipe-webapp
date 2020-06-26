import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import Recipe from '../../pages/[recipe]';

describe('[recipe] page', async assert => {
  {
    const $ = render(<Recipe/>);

    assert({
      given: 'nothing',
      should: 'render recipe-display component',
      actual: $('.recipe-display').length,
      expected: 1
    });
  }

});
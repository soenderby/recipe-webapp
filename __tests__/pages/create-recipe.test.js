import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import CreateRecipe from '../../pages/create-recipe';

describe('create-recipe page', async assert => {
  {
    const $ = render(<CreateRecipe/>);

    assert({
      given: 'nothing',
      should: 'render recipe-instructions textarea',
      actual: $('.recipe-instructions').length,
      expected: 1
    });
  }

  {
    const $ = render(<CreateRecipe/>);

    assert({
      given: 'nothing',
      should: 'render submit-button textarea',
      actual: $('.submit-button').length,
      expected: 1
    });
  }
});
import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import Recipes from '../../pages/recipes';

describe('recipes page', async assert => {
  {
    const $ = render(<Recipes/>);

    assert({
      given: 'nothing',
      should: 'render recipe-catalog component',
      actual: $('.recipe-catalog').length,
      expected: 1
    });
  }

});
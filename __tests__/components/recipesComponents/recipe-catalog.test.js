import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import RecipeCatalog from '../../../components/recipesComponents/recipe-catalog';

describe('RecipeCatalog component', async assert => {
  {
    const $ = render(<RecipeCatalog/>);

    assert({
      given: 'nothing',
      should: 'render recipe-catalog element',
      actual: $('.recipe-catalog').length,
      expected: 1
    });
  }

});
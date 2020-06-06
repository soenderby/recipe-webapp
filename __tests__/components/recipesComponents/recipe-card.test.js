import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import RecipeCard from '../../../components/recipesComponents/recipe-card';

describe('recipe card component', async assert => {
  {
    const $ = render(<RecipeCard/>);

    assert({
      given: 'nothing',
      should: 'render recipe-card element',
      actual: $('.recipe-card').length,
      expected: 1
    });
  }

  {
    const $ = render(<RecipeCard/>);

    assert({
      given: 'nothing',
      should: 'render recipe-name element',
      actual: $('.recipe-name').length,
      expected: 1
    });
  }

  {
    const $ = render(<RecipeCard name={ 'name' }/>);

    assert({
      given: 'a recipe name',
      should: 'render given name',
      actual: $('.recipe-name').html().trim(),
      expected: 'name'
    });
  }

});
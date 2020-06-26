import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import RecipeDisplay from '../../../components/recipeDisplayComponents/recipe-display';

describe('RecipeDisplay component', async assert => {
  {
    const $ = render(<RecipeDisplay/>);

    assert({
      given: 'nothing',
      should: 'render recipe-display component',
      actual: $('.recipe-display').length,
      expected: 1
    });
  }

  {
    const $ = render(<RecipeDisplay/>);

    assert({
      given: 'nothing',
      should: 'render name component',
      actual: $('.name').length,
      expected: 1
    });
  }

  {
    const $ = render(<RecipeDisplay/>);

    assert({
      given: 'nothing',
      should: 'render ingredient-list component',
      actual: $('.ingredient-list').length,
      expected: 1
    });
  }

  {
    const $ = render(<RecipeDisplay/>);

    assert({
      given: 'nothing',
      should: 'render instructions component',
      actual: $('.instructions').length,
      expected: 1
    });
  }

  {
    const recipe = {
      name: 'name'
    }
    const $ = render(<RecipeDisplay name={ recipe.name }/>);

    assert({
      given: 'recipe with name',
      should: 'display name',
      actual: $('.name').html().trim(),
      expected: recipe.name
    });
  }

  {
    const recipe = {
      instructions: 'instructions'
    }
    const $ = render(<RecipeDisplay instructions={ recipe.instructions }/>);

    assert({
      given: 'recipe with instructions',
      should: 'display instructions',
      actual: $('.instructions').html().trim(),
      expected: recipe.instructions
    });
  }

});
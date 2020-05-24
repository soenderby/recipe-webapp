import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import IngredientList from '../../components/createRecipeComponents/ingredient-list';
import { createIngredient } from '../testUtils/recipe-reducer-factories';

const createIngredientList = ({ ingredients = [] }) => render(<IngredientList ingredients = { ingredients }/>);

describe('IngredientList component', async assert => {
  {
    const $ = createIngredientList([]);

    assert({
      given: 'empty list',
      should: 'render no ingredients',
      actual: $('.ingredient-listItem').length,
      expected: 0
    });
  }

  {
    const $ = createIngredientList([]);

    assert({
      given: 'empty list',
      should: 'render ingredient list',
      actual: $('.ingredient-list').length,
      expected: 1
    });
  }

  {
    const $ = createIngredientList({ingredients:[createIngredient()]});

    assert({
      given: 'single empty ingredient',
      should: 'render single ingredient',
      actual: $('.ingredient-listItem').length,
      expected: 1
    });
  }

  {
    const $ = createIngredientList({ingredients:[
      createIngredient(),
      createIngredient(),
      createIngredient()
    ]});

    assert({
      given: 'list of ingredients',
      should: 'render correct number of ingredients',
      actual: $('.ingredient-listItem').length,
      expected: 3
    });
  }

});
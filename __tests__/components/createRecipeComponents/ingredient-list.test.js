import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import IngredientList from '../../../components/createRecipeComponents/ingredient-list';
import { createIngredient } from '../../testUtils/recipe-reducer-factories';

const createIngredientList = ({ ingredients = [] }) => render(<IngredientList ingredients = { ingredients } onChange={() => ''} onRemove={() => ''}/>);

describe('Input IngredientList component', async assert => {
  {
    const $ = createIngredientList([]);

    assert({
      given: 'empty list',
      should: 'render no ingredients',
      actual: $('.ingredient-input').length,
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
      actual: $('.ingredient-input').length,
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
      actual: $('.ingredient-input').length,
      expected: 3
    });
  }
  
  {
    const $ = createIngredientList([]);

    assert({
      given: 'nothing',
      should: 'render ingredient-name-titel component',
      actual: $('.ingredient-name-titel').length,
      expected: 1
    });
  }

  {
    const $ = createIngredientList([]);

    assert({
      given: 'nothing',
      should: 'render ingredient-amount-titel component',
      actual: $('.ingredient-amount-titel').length,
      expected: 1
    });
  }

  {
    const $ = createIngredientList([]);

    assert({
      given: 'nothing',
      should: 'render titels component',
      actual: $('.titels').length,
      expected: 1
    });
  }
});
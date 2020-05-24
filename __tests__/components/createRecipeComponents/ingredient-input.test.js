import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import IngredientInput from '../../../components/createRecipeComponents/ingredient-input';

const createIngredientInput = ({name='', amount=''} = {}) => render(<IngredientInput name={ name } amount={ amount }/>);

describe('IngredientInput component', async assert => {
  {
    const $ = createIngredientInput();

    assert({
      given: 'an empty ingredient',
      should: 'render a single ingredient input',
      actual: $('.ingredient-input').length,
      expected: 1
    });
  }

  {
    const $ = createIngredientInput();

    assert({
      given: 'an empty ingredient',
      should: 'render a ingredient name input',
      actual: $('.ingredient-name-input').length,
      expected: 1
    });
  }

  {
    const $ = createIngredientInput();

    assert({
      given: 'an empty ingredient',
      should: 'render a ingredient amount input',
      actual: $('.ingredient-amount-input').length,
      expected: 1
    });
  }

  {
    const $ = createIngredientInput();

    assert({
      given: 'an empty ingredient',
      should: 'not render button',
      actual: $('.remove-ingredient-button').length,
      expected: 0
    });
  }

  {
    const $ = createIngredientInput({name:'test', amount:'test'});

    assert({
      given: 'non empty ingredient',
      should: 'render button',
      actual: $('.remove-ingredient-button').length,
      expected: 1
    });
  }
});
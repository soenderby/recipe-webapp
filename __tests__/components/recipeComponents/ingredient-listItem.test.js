import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import IngredientListItem from '../../../components/recipeComponents/ingredient-listItem';

const createIngredientListItem = ({name='', amount=''} = {}) => render(<IngredientListItem name={ name } amount={ amount }/>);

describe('IngredientListItem component', async assert => {
  {
    const $ = createIngredientListItem();

    assert({
      given: 'an empty ingredient',
      should: 'render a single ingredient listItem',
      actual: $('.ingredient-listItem').length,
      expected: 1
    });
  }

  {
    const $ = createIngredientListItem();

    assert({
      given: 'an empty ingredient',
      should: 'render ingredient name element',
      actual: $('.ingredient-name').length,
      expected: 1
    });
  }

  {
    const $ = createIngredientListItem();

    assert({
      given: 'an empty ingredient',
      should: 'render ingredient amount element',
      actual: $('.ingredient-amount').length,
      expected: 1
    });
  }

  {
    const $ = createIngredientListItem({ name:'test', amount:'' });

    assert({
      given: 'an ingredient name',
      should: 'render ingredients name',
      actual: $('.ingredient-name').html().trim(),
      expected: 'test'
    });
  }

  {
    const $ = createIngredientListItem({ name:'', amount:'test' });

    assert({
      given: 'an ingredient amount',
      should: 'render ingredients amount',
      actual: $('.ingredient-amount').html().trim(),
      expected: 'test'
    });
  }
});
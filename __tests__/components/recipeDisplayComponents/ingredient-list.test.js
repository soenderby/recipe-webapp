import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import IngredientList from '../../../components/recipeDisplayComponents/ingredient-list';

describe('Display IngredientList component', async assert => {
  {
    const recipe = {
      ingredients: []
    }
    const $ = render(<IngredientList ingredients={ recipe.ingredients }/>);
  
    assert({
      given: 'recipe with no ingredients',
      should: 'not render any ingredients',
      actual: $('.ingredient').length,
      expected: 0
    });
  }

  {
    const recipe = {
      ingredients: [
        { name: 'ingredient1', amount: '1'},
      ]
    }
    const $ = render(<IngredientList ingredients={ recipe.ingredients }/>);
  
    assert({
      given: 'single ingredient',
      should: 'render ingredient-name component',
      actual: $('.ingredient-name').length,
      expected: 1
    });
  }

  {
    const ingredients = [
      { name: 'ingredient1', amount: '1'},
    ];
    const $ = render(<IngredientList ingredients={ ingredients }/>);
  
    assert({
      given: 'single ingredient',
      should: 'display given name',
      actual: $('.ingredient-name').html().trim(),
      expected: ingredients[0].name
    });
  }

  {
    const recipe = {
      ingredients: [
        { name: 'ingredient1', amount: '1'},
      ]
    }
    const $ = render(<IngredientList ingredients={ recipe.ingredients }/>);
  
    assert({
      given: 'single ingredient',
      should: 'render ingredient-amount component',
      actual: $('.ingredient-name').length,
      expected: 1
    });
  }

  {
    const ingredients = [
      { name: 'ingredient1', amount: '1'},
    ];
    const $ = render(<IngredientList ingredients={ ingredients }/>);
  
    assert({
      given: 'single ingredient',
      should: 'display given amount',
      actual: $('.ingredient-amount').html().trim(),
      expected: ingredients[0].amount
    });
  }
  
  {
    const recipe = {
      ingredients: [
        { name: 'ingredient1', amount: '1'},
      ]
    }
    const $ = render(<IngredientList ingredients={ recipe.ingredients }/>);
  
    assert({
      given: 'list of  ingredients',
      should: 'render correct number of ingredients',
      actual: $('.ingredient').length,
      expected: 1
    });
  }
  
  {
    const recipe = {
      ingredients: [
        { name: 'ingredient1', amount: '1'},
        { name: 'ingredient2', amount: '2'},
        { name: 'ingredient3', amount: '3'}
      ]
    }
    const $ = render(<IngredientList ingredients={ recipe.ingredients }/>);
  
    assert({
      given: 'list of ingredients',
      should: 'render correct number of ingredients',
      actual: $('.ingredient').length,
      expected: 3
    });
  }
});
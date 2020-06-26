import React from 'react';
import { map } from '../../lib/utils';

const ingredientItem = ({ key = NaN, name = '', amount = '' }) => 
  <li className='ingredient' key={ key }>
    <p className='ingredient-name'>{ name }</p>
    <p className='ingredient-amount'>{ amount }</p>
  </li>
;

const mapIngredients = map( (ingredient, index) => 
  ingredientItem({ 
    key: index, 
    name: ingredient.name, 
    amount: ingredient.amount 
  })
);

export default ({ ingredients = [] }) => {
  
  return (
    <ul className='ingredient-list'>
      { mapIngredients(ingredients) }
    </ul>
  )
};
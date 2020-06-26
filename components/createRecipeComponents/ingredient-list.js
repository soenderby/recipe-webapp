import React from 'react';
import { partial } from 'ramda';
import IngredientInput from './ingredient-input';

import './ingredient-list.scss';

export default ({ ingredients = [], onChange, onRemove }) => 
  <ul className='ingredient-list'>
    <li className='titels'>
      {/* TODO: find a way to align the titels with the inputs */}
      <label className='ingredient-name-titel'>Ingredient name:</label>
      <label className='ingredient-amount-titel'>Amount:</label>
    </li>
    {
      ingredients.map( (ingredient, index)  => 
        <IngredientInput 
          key={ index }
          name={ingredient.name}
          amount={ingredient.amount}
          onChange={ partial(onChange, [ingredient.id]) }
          onRemove={ () => onRemove(ingredient.id) }
        />
      )
    }
  </ul>
;
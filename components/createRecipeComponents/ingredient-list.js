import React from 'react';
import { partial } from 'ramda';
import IngredientInput from '../createRecipeComponents/ingredient-input';

export default ({ ingredients = [], onChange, onRemove }) => 
  <div className='ingredient-list'>
    {
      ingredients.map( (ingredient, index)  => 
        <IngredientInput 
          name={ingredient.name}
          amount={ingredient.amount}
          onChange={ partial(onChange, [index + 1]) }
          onRemove={ () => onRemove(index + 1) }
        />
      )
    }
  </div>
;
import React from 'react';
import { partial } from 'ramda';
import IngredientInput from '../createRecipeComponents/ingredient-input';

export default ({ ingredients = [], onChange, onRemove }) => 
  <div className='ingredient-list'>
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
  </div>
;
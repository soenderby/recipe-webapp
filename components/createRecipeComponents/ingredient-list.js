import React from 'react';
import IngredientListItem from '../recipeComponents/ingredient-listItem';

export default ({ ingredients = [] }) => 
  <div className='ingredient-list'>
    {
      ingredients.map( ingredient  => 
        <IngredientListItem name={ingredient.name} amount={ingredient.amount}/>
      )
    }
  </div>
;
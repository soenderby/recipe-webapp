import React from 'react';
import RecipeCard from './recipe-card';

export default ({ recipes = [] }) => 
{
  return (
    <div className='recipe-catalog'>
      {
        recipes.map(recipe => 
          <RecipeCard key={ recipe.name } name={ recipe.name }/>
        )
      }
    </div>
  )
}
;
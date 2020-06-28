import React from 'react';
import IngredientList from './ingredient-list';

export default ({ name='', instructions='', ingredients=[] }) => 
  <div className='recipe-display'>
    <h2 className='name'>{ name }</h2>
    <IngredientList ingredients={ ingredients }/>
    <p className='instructions'>{ instructions }</p>
  </div>
;
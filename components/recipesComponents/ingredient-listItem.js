import React from 'react';

export default ({name = '', amount = ''}) => 
  <li className='ingredient-listItem'>
    <div className='ingredient-name'>{ name }</div>
    <div className='ingredient-amount'>{ amount }</div>
  </li>
;
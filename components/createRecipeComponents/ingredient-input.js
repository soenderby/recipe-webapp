import React from 'react';

export default ({ name = '', amount = '' }) =>
  <li className='ingredient-input'>
    <input className='ingredient-name-input' type='text' value={ name }/>
    <input className='ingredient-amount-input' type='text' value={ amount }/>
    {
      name === '' && amount === '' ? 
        <> </>
        :
        <button className='remove-ingredient-button'></button>
    }
  </li>
;
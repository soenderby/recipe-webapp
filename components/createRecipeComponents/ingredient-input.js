import React from 'react';

export default ({ name, amount, onChange, onRemove }) =>
  <li className='ingredient-input'>
    <input className='ingredient-name-input' type='text' value={ name } onChange={ e => onChange({ name: e.target.value }) }/>
    <input className='ingredient-amount-input' type='text' value={ amount } onChange={ e => onchange({ amount: e.target.value }) }/>
    {
      name === '' && amount === '' ? 
        <> </>
        :
        <button className='remove-ingredient-button' onClick={ onRemove }>Remove</button>
    }
  </li>
;
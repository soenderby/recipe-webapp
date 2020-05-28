import React from 'react';

export default ({ labelText = '', inputText = '', onChange }) => 
  <div className='labeled-input'>
    <label className='text-label'>
      { labelText }
    </label>
    <input className='text-input' value={ inputText } onChange={ e => onChange(e.target.value) }/>
  </div>
;
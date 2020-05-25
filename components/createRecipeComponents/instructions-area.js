import React from 'react';

export default ({ text, onChange }) => 
  <>
    <textarea className='recipe-instructions' value={ text } onChange={ onChange } />
  </>
;
import React from 'react';

export default ({ name='', instructions='' }) => 
  <div className='recipe-display'>
    <h2 className='name'>{ name }</h2>
    <ul className='ingredient-list'></ul>
    <p className='instructions'>{ instructions }</p>
  </div>
;
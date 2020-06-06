import React from 'react';

export default ({ name='' }) => 
  <div className='recipe-card'>

    <label className='recipe-name'>
      { name }
    </label>
  </div>
;
import React from 'react';

import './labeled-text.scss';

export default ({ label='', text='' }) => 
  <div className='labeled-text'>
    <p className='label'>{ label }</p>
    <p className='text'>{ text }</p>
  </div>
;
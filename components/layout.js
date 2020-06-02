import React from 'react';

export default props => 
  <div className='layout'>

    <div className='page-content'>
      { props.children }
    </div>
  </div>
;
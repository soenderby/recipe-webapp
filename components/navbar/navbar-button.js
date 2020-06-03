import React from 'react';
import Link from 'next/link';

export default ({ label = '', path = '' }) => 
  <Link href={ path }>
    <div className='navbar-button'>
      <span className='button-label'>{ label }</span>
    </div>
  </Link>
;
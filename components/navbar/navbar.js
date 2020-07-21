import React from 'react';
import NavbarButton from './navbar-button';

import './navbar.scss';

export default ({ buttons=[] }) => 
  <div className='navbar'>
    {
      buttons.map(button => 
        <NavbarButton
          key={button.path}
          path={button.path}
          label={button.label}
        />
      )
    }
  </div>
;
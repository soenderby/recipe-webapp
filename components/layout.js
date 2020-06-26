import React from 'react';
import navbarButtons from '../config/navbar-buttons';
import NavBar from './navbar/navbar';

import './layout.scss';

//TODO: Make into a higher order component
export default props => 
  <div className='layout'>
    <NavBar buttons={ navbarButtons }/>
    <div className='page-content'>
      { props.children }
    </div>
  </div>
;
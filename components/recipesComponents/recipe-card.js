import React from 'react';
import Link from 'next/link';

import './recipe-card.scss';

// Passing in link, as it may change from just the name in the future
export default ({ name='', link='', imagePath='' }) => {
  const defaultImagePath = '/noImage.jpg';
  const imageSrc = imagePath === '' ? defaultImagePath : imagePath;

  return (
    <div className='recipe-card'>
      <img className='recipe-image' src={ imageSrc } alt={ 'thumbnail for ' + name }/>
      <Link href={ link } >
        <a className='recipe-name'>
          { name }
        </a>
      </Link>
    </div>
  )
};
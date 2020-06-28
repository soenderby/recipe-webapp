import React from 'react';
import Link from 'next/link';

import './recipe-card.scss';

export default ({ name='', imagePath='' }) => {
  const defaultImagePath = '/noImage.jpg';
  const imageSrc = imagePath === '' ? defaultImagePath : imagePath;

  return (
    <div className='recipe-card'>
      <img className='recipe-image' src={ imageSrc } alt={ 'thumbnail for ' + name }/>
      <Link href={ '/' + name }>
        <a className='recipe-name'>
          { name }
        </a>
      </Link>
    </div>
  )
};
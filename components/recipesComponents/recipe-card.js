import React from 'react';

import './recipe-card.scss';

export default ({ name='', imagePath='' }) => {
  const defaultImagePath = '/noImage.jpg';
  const imageSrc = imagePath === '' ? defaultImagePath : imagePath;

  return (
    <div className='recipe-card'>
      <img className='recipe-image' src={ imageSrc } alt={ 'thumbnail for ' + name }/>
      <label className='recipe-name'>
        { name }
      </label>
    </div>
  )
};
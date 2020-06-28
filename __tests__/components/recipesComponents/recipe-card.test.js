import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import RecipeCard from '../../../components/recipesComponents/recipe-card';

describe('recipe card component', async assert => {
  {
    const $ = render(<RecipeCard/>);

    assert({
      given: 'nothing',
      should: 'render recipe-card element',
      actual: $('.recipe-card').length,
      expected: 1
    });
  }

  // name
  {
    const $ = render(<RecipeCard/>);

    assert({
      given: 'nothing',
      should: 'render recipe-name element',
      actual: $('.recipe-name').length,
      expected: 1
    });
  }

  {
    const $ = render(<RecipeCard name={ 'name' }/>);

    assert({
      given: 'a recipe name',
      should: 'render given name',
      actual: $('.recipe-name').html().trim(),
      expected: 'name'
    });
  }

  {
    const $ = render(<RecipeCard name={ 'name' }/>);

    assert({
      given: 'a recipe name',
      should: 'link to page for given name',
      actual: $('.recipe-name').attr('href'),
      expected: '/name'
    });
  }

  // image
  {
    const $ = render(<RecipeCard />);

    assert({
      given: 'nothing',
      should: 'render default image',
      actual: $('.recipe-image').attr('src'),
      expected: '/noImage.jpg'
    });
  }

  {
    const imageSrc = '/image'
    const $ = render(<RecipeCard imagePath={ imageSrc }/>);

    assert({
      given: 'nothing',
      should: 'render given image',
      actual: $('.recipe-image').attr('src'),
      expected: imageSrc
    });
  }

});
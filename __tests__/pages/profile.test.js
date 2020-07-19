import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import Profile from '../../pages/profile';

describe('profile page', async assert => {
  {
    const $ = render(<Profile/>);

    assert({
      given: 'nothing',
      should: 'render profile component',
      actual: $('.profile').length,
      expected: 1
    });
  }

  {
    const $ = render(<Profile/>);

    assert({
      given: 'nothing',
      should: 'render user-details component',
      actual: $('.user-details').length,
      expected: 1
    });
  }

  {
    const recipes = [
      { name: 'recipes1' },
      { name: 'recipes2' }
    ]
    const $ = render(<Profile authoredRecipes={ recipes }/>)

    assert({
      given: 'a list of autored recipes',
      should: 'render authored-recipes component',
      actual: $('.authored-recipes').length,
      expected: 1
    })
  }

  {
    const $ = render(<Profile/>)

    assert({
      given: 'no authored recipes',
      should: 'not render authored-recipes component',
      actual: $('.authored-recipes').length,
      expected: 0
    })
  }

  {
    const $ = render(<Profile/>);

    assert({
      given: 'nothing',
      should: 'render favorite-recipes component',
      actual: $('.favorite-recipes').length,
      expected: 1
    });
  }

  {
    const $ = render(<Profile/>);

    assert({
      given: 'no favorite recipes',
      should: 'render no-favorites-message component',
      actual: $('.no-favorites-message').length,
      expected: 1
    });
  }

  {
    const recipes = [
      { name: 'recipes1' },
      { name: 'recipes2' }
    ]
    const $ = render(<Profile favoriteRecipes={ recipes }/>)

    assert({
      given: 'a list of favorite recipes',
      should: 'render recipe-card for each recipe',
      actual: $('.recipe-card').length,
      expected: 2
    })
  }

  {
    const $ = render(<Profile/>)

    assert({
      given: 'no authored recipes',
      should: 'npt render authored-recipes component',
      actual: $('.authored-recipes').length,
      expected: 0
    })
  }
});
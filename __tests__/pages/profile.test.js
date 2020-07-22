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
    const recipes = [
      { name: 'recipes1' },
      { name: 'recipes2' }
    ]
    const $ = render(<Profile authoredRecipes={ recipes }/>)

    assert({
      given: 'a list of autored recipes',
      should: 'render authored-title component',
      actual: $('.authored-title').length,
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
      given: 'nothing',
      should: 'render favorites-title component',
      actual: $('.favorites-title').length,
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
      should: 'not render authored-recipes component',
      actual: $('.authored-recipes').length,
      expected: 0
    })
  }

  // User Details
  /*
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
    const $ = render(<Profile/>);

    assert({
      given: 'nothing',
      should: 'render title component',
      actual: $('.title').length,
      expected: 1
    });
  }
  */

  {
    const $ = render(<Profile/>)

    assert({
      given: 'nothing',
      should: 'render username component',
      actual: $('.username').length,
      expected: 1
    })
  }

  {
    const $ = render(<Profile/>)

    assert({
      given: 'nothing',
      should: 'render email component',
      actual: $('.email').length,
      expected: 1
    })
  }

  {
    const user = {
      username: 'testUser'
    };
    const $ = render(<Profile user={ user }/>)

    assert({
      given: 'user with username',
      should: 'render given username',
      actual: $('.username').html().trim(),
      expected: user.username
    })
  }

  {
    const user = {
      email: 'testMail'
    }
    const $ = render(<Profile user={ user }/>)

    assert({
      given: 'user with email',
      should: 'render given email',
      actual: $('.email').html().trim(),
      expected: user.email
    })
  }
/*
  {
    const $ = render(<Profile/>)

    assert({
      given: 'nothing',
      should: 'render username-title component',
      actual: $('.username-title').length,
      expected: 1
    })
  }

  {
    const $ = render(<Profile/>)

    assert({
      given: 'nothing',
      should: 'render email-title component',
      actual: $('.email-title').length,
      expected: 1
    })
  }
  */
});
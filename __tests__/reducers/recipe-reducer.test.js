import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import { reducer, addInstructions } from '../../reducers/recipe-reducer';

describe('recipe reducer', async assert => {
  const initialState = {
    instructions: ''
  }

  assert({
    given: 'no arguments',
    should: 'return the initial state',
    actual: reducer(),
    expected: initialState
  });

  assert({
    given: 'inital state and addRecipe action without parameters',
    should: 'return the initial state',
    actual: reducer(initialState, addInstructions()),
    expected: initialState
  });

  assert({
    given: 'initial state and a addRecipe action with text',
    should: 'assign the text to the instructions',
    actual: reducer(initialState, addInstructions('whisk eggwhites until they form peaks')),
    expected: { instructions: 'whisk eggwhites until they form peaks' }
  });

})


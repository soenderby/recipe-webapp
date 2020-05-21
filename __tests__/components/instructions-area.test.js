import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import InstructionsArea from '../../components/createRecipeComponents/instructions-area';

describe('InstructionsArea Component ', async assert => {
  const createArea = instructions => render(<InstructionsArea text={ instructions } />);

  {
    const text = 'TestText for the textarea component';
    const $ = createArea(text);
    assert({
      given: 'Some text',
      should: 'render text',
      actual: $('.recipe-instructions').html().trim(),
      expected: text
    });
  }
});
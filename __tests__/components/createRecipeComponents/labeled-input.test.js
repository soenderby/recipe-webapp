import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import LabeledInput from '../../../components/createRecipeComponents/labeled-input';

describe('labeled-input component', async assert => {
  {
    const $ = render(<LabeledInput/>);

    assert({
      given: 'nothing',
      should: 'render labeled-input',
      actual: $('.labeled-input').length,
      expected: 1
    });
  }

  {
    const $ = render(<LabeledInput/>);

    assert({
      given: 'nothing',
      should: 'render text-label',
      actual: $('.text-label').length,
      expected: 1
    });
  }

  {
    const $ = render(<LabeledInput/>);

    assert({
      given: 'nothing',
      should: 'render text-input',
      actual: $('.text-input').length,
      expected: 1
    });
  }

  {
    const $ = render(<LabeledInput labelText={'label text'}/>);

    assert({
      given: 'text for label',
      should: 'render text in label',
      actual: $('.text-label').html().trim(),
      expected: 'label text'
    });
  }
});
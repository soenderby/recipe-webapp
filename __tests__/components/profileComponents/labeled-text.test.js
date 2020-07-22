import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import LabeledText from '../../../components/profileComponents/labeled-text';

describe('LabeledText component', async assert => {
  {
    const $ = render(<LabeledText/>);

    assert({
      given: 'nothing',
      should: 'render labeled-text component',
      actual: $('.labeled-text').length,
      expected: 1
    });
  }

  {
    const $ = render(<LabeledText/>);

    assert({
      given: 'nothing',
      should: 'render title component',
      actual: $('.label').length,
      expected: 1
    });
  }

  {
    const $ = render(<LabeledText/>);

    assert({
      given: 'nothing',
      should: 'render text component',
      actual: $('.text').length,
      expected: 1
    });
  }

  {
    const $ = render(<LabeledText label={'label'}/>);

    assert({
      given: 'title parameter',
      should: 'render given title',
      actual: $('.label').html().trim(),
      expected: 'label'
    });
  }

  {
    const $ = render(<LabeledText text={'text'}/>);

    assert({
      given: 'text parameter',
      should: 'render given text',
      actual: $('.text').html().trim(),
      expected: 'text'
    });
  }

});
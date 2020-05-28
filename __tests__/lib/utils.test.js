import { describe } from 'riteway';
import { getEventValue } from '../../lib/utils';
import { createRecipe } from '../testUtils/recipe-reducer-factories';

const createEvent = (value) => ({ target: { value: value }});

describe('getEventValue', async assert => {
  {
    const event = createEvent('value');
    assert({
      given: 'event',
      should: 'return event.target.value',
      actual: getEventValue(event),
      expected: 'value'
    });
  }
});
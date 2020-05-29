import { describe } from 'riteway';
import {
  getEventValue,
  getLastElement,
  addElementToList 
} from '../../lib/utils';
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

describe('getLastElement', async assert => {
  {
    const list = [1, 2, 3, 4, 5]
    assert({
      given: 'array',
      should: 'return the last element',
      actual: getLastElement(list),
      expected: 5
    });
  }

  {
    const list = ['first']
    assert({
      given: 'array with single element',
      should: 'return the element',
      actual: getLastElement(list),
      expected: 'first'
    });
  }

  {
    const list = []
    assert({
      given: 'empty array',
      should: 'return an empty list',
      actual: getLastElement(list),
      expected: []
    });
  }
});

describe('addElementToList', async assert => {
  {
    const element = 'element';
    const list = [];
    assert({
      given: 'empty array',
      should: 'return array with element',
      actual: addElementToList(element, list),
      expected: [...list, element]
    });
  }

  {
    const element = 'element';
    const list = ['one', 'two', 'three'];
    assert({
      given: 'non empty array',
      should: 'return array ending with given element',
      actual: addElementToList(element, list),
      expected: [...list, element]
    });
  }
});
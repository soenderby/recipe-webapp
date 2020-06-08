import { describe } from 'riteway';
import { 
  reducer,
  addRecipe
} from '../../reducers/recipe-catalog-reducer';

describe('recipe-catalog reducer', async assert => {

  const initialState = {
    recipes: []
  }

  assert({
    given: 'no arguments',
    should: 'return the initial state',
    actual: reducer(),
    expected: initialState
  });
  
  // addRecipes
  assert({
    given: 'initial state and addRecipe action without parameters',
    should: 'add empty ingredient',
    actual: reducer(initialState, addRecipe()),
    expected: Object.assign({}, initialState, {recipes: [{ name: '', imagePath: '' }]})
  });

  {
    const recipe = {name: 'name'};
    assert({
      given: 'initial state and addRecipe with object containing recipe name',
      should: 'add recipe to array',
      actual: reducer(initialState, addRecipe(recipe)),
      expected : Object.assign({}, initialState, {recipes: [{ name: 'name', imagePath: '' }]})
    });
  }

  {
    const recipe = {imagePath: 'imagePath'};
    assert({
      given: 'initial state and addRecipe with object containing imagePath',
      should: 'add recipe to array',
      actual: reducer(initialState, addRecipe(recipe)),
      expected : Object.assign({}, initialState, {recipes: [{ name: '', imagePath: 'imagePath' }]})
    });
  }

  {
    const recipe = {name: 'name', imagePath: 'imagePath'};
    assert({
      given: 'initial state and addRecipe with object containing recipe name and imagePath',
      should: 'add recipe to array',
      actual: reducer(initialState, addRecipe(recipe)),
      expected : Object.assign({}, initialState, {recipes: [{ name: 'name', imagePath: 'imagePath' }]})
    });
  }
});
import { describe } from 'riteway';
import { 
  reducer,
  addRecipe,
  addRecipes
} from '../../reducers/recipe-catalog-reducer';
import { createCatalogItem } from '../testUtils/recipe-catalog-reducer-factories';

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
  
  // addRecipe
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

  {
    const recipe = createCatalogItem({name: 'name', imagePath: 'imagePath'})
    const state = {recipes: [createCatalogItem()]};
    assert({
      given: 'state with recipe and addRecipe with new recipe catalog item',
      should: 'add recipe to array',
      actual: reducer(state, addRecipe(recipe)),
      expected : Object.assign(
        {},
        {recipes: [createCatalogItem(), { name: 'name', imagePath: 'imagePath' }]}
      )
    });
  }
  // AddRecipes
  assert({
    given: 'initial state and addRecipes action without parameters',
    should: 'return initial state',
    actual: reducer(initialState, addRecipes()),
    expected: initialState
  });

  {
    const recipes = [{name: 'name', imagePath: 'imagePath'}];
    assert({
      given: 'initial state and addRecipe with array containing single catalog item',
      should: 'add recipes to array',
      actual: reducer(initialState, addRecipes(recipes)),
      expected : Object.assign({}, initialState, {recipes: [{ name: 'name', imagePath: 'imagePath' }]})
    });
  }
});
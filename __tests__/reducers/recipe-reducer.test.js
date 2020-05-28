import { describe } from 'riteway';
import { 
  reducer,
  addInstructions,
  addIngredient,
  removeIngredient,
  changeIngredient,
  changeName
} from '../../reducers/recipe-reducer';
import { createRecipe, createIngredient } from '../testUtils/recipe-reducer-factories';

// Consider splitting tests into multiple files

describe('recipe reducer', async assert => {
  const initialState = {
    name: '',
    instructions: '',
    ingredients: []
  }

  assert({
    given: 'no arguments',
    should: 'return the initial state',
    actual: reducer(),
    expected: initialState
  });

  // Add instructions
  assert({
    given: 'inital state and addInstructions action without parameters',
    should: 'return the initial state',
    actual: reducer(initialState, addInstructions()),
    expected: initialState
  });

  assert({
    given: 'initial state and addInstructions action with text',
    should: 'replace the text in the instructions',
    actual: reducer(
      createRecipe({instructions: 'instructions to override'}),
      addInstructions('whisk eggwhites until they form peaks')
      ),
    expected: Object.assign(createRecipe(), {instructions: 'whisk eggwhites until they form peaks'})
  });

  assert({
    given: 'instructions and addInstructions action with text',
    should: 'assign the text to the instructions',
    actual: reducer(initialState, addInstructions('whisk eggwhites until they form peaks')),
    expected: Object.assign(createRecipe(), {instructions: 'whisk eggwhites until they form peaks'})
  });

  // Add ingredient 
  assert({
    given: 'initial state and addIngredient action without parameters',
    should: 'add empty ingredient to array',
    actual: reducer(initialState, addIngredient()),
    expected: Object.assign(createRecipe(), {ingredients: [createIngredient()]})
  });

  {
    const testIngredient = createIngredient({id: 1, name: 'Test Ingredient', amount: 'Lots'});

    assert({
      given: 'initial state and addIngredient action with ingredient',
      should: 'add new ingredient to array',
      actual: reducer(initialState, addIngredient(testIngredient)),
      expected: Object.assign(createRecipe(), {ingredients: [testIngredient]})
    });
  }

  {
    const testIngredient1 = createIngredient({id: 1, name: 'Test Ingredient', amount: 'Lots'});
    const testIngredient2 = createIngredient({id: 2, name: 'Test Ingredient two', amount: 'almost as much'});

    assert({
      given: 'ingredient and addIngredient action with ingredient',
      should: 'add new ingredient to array',
      actual: reducer(
        createRecipe({ingredients: [testIngredient1]}),
        addIngredient(testIngredient2)
      ),
      expected: Object.assign(createRecipe(), {ingredients: [testIngredient1, testIngredient2]})
    });
  }

  // Remove Ingredient
  {
    const testIngredient = createIngredient({id: 1, name: 'Test Ingredient', amount: 'Lots'});

    assert({
      given: 'single ingredient and removeIngredient action with ingredient',
      should: 'remove ingredient from array',
      actual: reducer(
        createRecipe({ingredients: [testIngredient]}),
        removeIngredient(1)
      ),
      expected: initialState
    });
  }

  {
    const testIngredient1 = createIngredient({id: 1, name: 'Test Ingredient', amount: 'Lots'});
    const testIngredient2 = createIngredient({id: 2, name: 'Test Ingredient two', amount: 'almost as much'});

    assert({
      given: 'ingredients and removeIngredient action with ingredient',
      should: 'remove ingredient from array',
      actual: reducer(
        createRecipe({ingredients: [testIngredient1, testIngredient2]}),
        removeIngredient(2)
      ),
      expected: Object.assign(createRecipe(), {ingredients: [testIngredient1]})
    });
  }

  // Change ingredient
  {
    const testIngredient = createIngredient({id: 1, name: 'Test Ingredient', amount: 'Lots'});

    assert({
      given: 'single ingredient and changeIngredient action with id, name, and amount',
      should: 'change ingredient',
      actual: reducer(
        createRecipe({ingredients: [testIngredient]}),
        changeIngredient(1, {name: 'changedName', amount: 'changedAmount'})
      ),
      expected: Object.assign(
        createRecipe(),
        {ingredients: [createIngredient({id: 1, name: 'changedName', amount: 'changedAmount'})]}
      )
    });
  }

  {
    const testIngredient1 = createIngredient({id: 1, name: 'Test Ingredient', amount: 'Lots'});
    const testIngredient2 = createIngredient({id: 2, name: 'Test Ingredient two', amount: 'almost as much'});

    assert({
      given: 'ingredients and changeIngredient action with id, name, and amount',
      should: 'change only ingredient with given id',
      actual: reducer(
        createRecipe({ingredients: [testIngredient1, testIngredient2]}),
        changeIngredient(2, {name: 'changedName', amount: 'changedAmount'})
      ),
      expected: Object.assign(
        createRecipe(),
        {ingredients: [
          testIngredient1,
          createIngredient({id: 2, name: 'changedName', amount: 'changedAmount'})
        ]}
      )
    });
  }

  {
    const testIngredient = createIngredient({id: 1, name: 'Test Ingredient', amount: 'Lots'});

    assert({
      given: 'single ingredient and changeIngredient action with id and name',
      should: 'change only ingredient name',
      actual: reducer(
        createRecipe({ingredients: [testIngredient]}),
        changeIngredient(1, {name: 'changedName'})
      ),
      expected: Object.assign(
        createRecipe(),
        {ingredients: [createIngredient({id: 1, name: 'changedName', amount: 'Lots'})]}
      )
    });
  }

  {
    const testIngredient = createIngredient({id: 1, name: 'Test Ingredient', amount: 'Lots'});

    assert({
      given: 'single ingredient and changeIngredient action with id and amount',
      should: 'change only ingredient amount',
      actual: reducer(
        createRecipe({ingredients: [testIngredient]}),
        changeIngredient(1, {amount: 'changed amount'})
      ),
      expected: Object.assign(
        createRecipe(),
        {ingredients: [createIngredient({id: 1, name: 'Test Ingredient', amount: 'changed amount'})]}
      )
    });
  }

  // Change name
  assert({
    given: 'initial state and changeName action without parameters',
    should: 'return initial state',
    actual: reducer(initialState, changeName()),
    expected: initialState
  });

  assert({
    given: 'initial state and changeName action with text',
    should: 'change name to given text',
    actual: reducer(initialState, changeName('test')),
    expected: Object.assign(createRecipe(), {name: 'test'})
  });

  assert({
    given: 'recipe with name and changeName action with text',
    should: 'change name to given text',
    actual: reducer(createRecipe({name: 'anotherName'}), changeName('test')),
    expected: createRecipe({name: 'test'})
  });

})


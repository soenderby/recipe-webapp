// Actions
const ADD_INSTRUCTIONS = 'RECIPE/ADD_INSTRUCTIONS';
const ADD_INGREDIENT = 'RECIPE/ADD_INGREDIENT';
const REMOVE_INGREDIENT = 'RECIPE/REMOVE_INGREDIENT';

const defaultState = {
  instructions: '',
  ingredients: []
}

// Action creators
const addInstructions = ( instructions = '' ) => ({
  type: ADD_INSTRUCTIONS,
  payload: { instructions }
});

const addIngredient = ({
  id = 0,
  name = '',
  amount = '',
} = {}) => ({
  type: ADD_INGREDIENT,
  payload: { id, name, amount }
});

const removeIngredient = (id) => ({
  type: REMOVE_INGREDIENT,
  payload: id
});

const reducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_INSTRUCTIONS:
      return Object.assign({}, state, payload);
    case ADD_INGREDIENT:
      return Object.assign({}, state, {
        ingredients: state.ingredients.concat(payload)
      });
    case REMOVE_INGREDIENT:
      return Object.assign({}, state, {
        ingredients: state.ingredients.filter( ingredient => ingredient.id != payload )
      });

    default: return state;
  }
};

export { 
  addInstructions,
  addIngredient,
  removeIngredient,
  reducer
};

// Actions
const ADD_INSTRUCTIONS = 'RECIPE::ADD_INSTRUCTIONS';
const ADD_INGREDIENT = 'RECIPE::ADD_INGREDIENT'

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
  name = '',
  amount = ''
} = {}) => ({
  type: ADD_INGREDIENT,
  payload: { name, amount }
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

    default: return state;
  }
};

export { 
  addInstructions,
  addIngredient,
  reducer
};

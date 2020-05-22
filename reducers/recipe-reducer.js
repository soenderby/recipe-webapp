const ADD_INSTRUCTIONS = 'RECIPE::ADD_INSTRUCTIONS';

const defaultState = {
  instructions: ''
}

const addInstructions = ( instructions = '' ) => ({
  type: ADD_INSTRUCTIONS,
  payload: { instructions }
});

const reducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_INSTRUCTIONS:
      return Object.assign({}, state, payload);

    default: return state;
  }
};

export { addInstructions, reducer };

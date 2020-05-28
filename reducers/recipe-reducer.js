// Actions
const ADD_INSTRUCTIONS = 'RECIPE/ADD_INSTRUCTIONS';
const ADD_INGREDIENT = 'RECIPE/ADD_INGREDIENT';
const REMOVE_INGREDIENT = 'RECIPE/REMOVE_INGREDIENT';
const CHANGE_INGREDIENT = 'RECIPE/CHANGE_INGREDIENT';
const CHANGE_NAME = 'RECIPE/CHANGE_NAME';

const defaultState = {
  name: '',
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

const changeIngredient = (id, {name = '', amount = ''}) => ({
  type: CHANGE_INGREDIENT,
  payload: { id: id, name: name, amount: amount }
});

const changeName = ( name = '' ) => ({
  type: CHANGE_NAME,
  payload: { name }
});

const reducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_INSTRUCTIONS: 
    case CHANGE_NAME:
      return Object.assign({}, state, payload );
    case ADD_INGREDIENT:
      return Object.assign({}, state, {
        ingredients: state.ingredients.concat(payload)
      });
    case REMOVE_INGREDIENT:
      return Object.assign({}, state, {
        ingredients: state.ingredients.filter( ingredient => ingredient.id != payload )
      });
    case CHANGE_INGREDIENT: 
      return Object.assign({}, state, {
        // Quite a bit of logic, consider moving to new function
        ingredients: state.ingredients.map( 
          ingredient => {
            return ingredient.id === payload.id ? 
              Object.assign({}, ingredient, {
                name: payload.name === '' ? ingredient.name : payload.name,
                amount: payload.amount === '' ? ingredient.amount : payload.amount
              }) 
              :
              ingredient
          })
      });

    default: return state;
  }
};

export { 
  addInstructions,
  addIngredient,
  removeIngredient,
  changeIngredient,
  changeName,
  reducer
};

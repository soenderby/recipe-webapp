const ADD_RECIPE = 'RECIPE_CATALOG/ADD_RECIPE';

const defaultState = {
  recipes: []
};

const addRecipe = ({
   name = '',
   imagePath = '' 
  } = {}) => ({
  type: ADD_RECIPE,
  payload: { name, imagePath }
});

const reducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_RECIPE:
      return Object.assign({}, state, {
        recipes: state.recipes.concat(payload)
      });
  }
  return state;
};

export {
  reducer,
  addRecipe
};
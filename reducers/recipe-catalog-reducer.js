const ADD_RECIPE = 'RECIPE_CATALOG/ADD_RECIPE';
const ADD_RECIPES = 'RECIPE_CATALOG/ADD_RECIPES';

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

const addRecipes = (recipes = []) => ({
  type: ADD_RECIPES,
  payload: recipes
});

const reducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_RECIPE:
    case ADD_RECIPES:
      return Object.assign({}, state, {
        recipes: state.recipes.concat(payload)
      });
  }
  return state;
};

export {
  reducer,
  addRecipe,
  addRecipes
};
const createRecipe=({
  instructions = '',
  ingredients = []
} = {}) => ({
  instructions, ingredients
});

const createIngredient=({
  name = '',
  amount = ''
} = {}) =>({
  name, amount 
})

export {
  createRecipe,
  createIngredient
}
const createRecipe=({
  instructions = '',
  ingredients = []
} = {}) => ({
  instructions, ingredients
});

const createIngredient=({
  id = 0,
  name = '',
  amount = ''
} = {}) =>({
  id, name, amount
})

export {
  createRecipe,
  createIngredient
}
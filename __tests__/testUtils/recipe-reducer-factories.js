const createRecipe=({
  name = '',
  instructions = '',
  ingredients = []
} = {}) => ({
  name, instructions, ingredients
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
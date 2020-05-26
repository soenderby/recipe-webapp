import React, { useReducer } from 'react';
import { reducer, addInstructions, addIngredient, removeIngredient, changeIngredient }   from '../reducers/recipe-reducer';
import InstructionArea from '../components/createRecipeComponents/instructions-area';
import IngredientList from '../components/createRecipeComponents/ingredient-list';

export default () => {
const [recipe, dispatch] = useReducer(reducer, reducer());

  return (
  <>
    <InstructionArea
      text={ 'Instructions for the recipe' }
      onChange={text => dispatch(addInstructions(text)) }
    />
    <IngredientList
      ingredients={ recipe.ingredients }
      onChange={ (id, {name, amount}) => dispatch(changeIngredient(id, {name, amount})) }
      onRemove={ id => dispatch(removeIngredient(id)) }
    />
    <button className='submit-button'>Submit Recipe</button>
  </>
  );
};
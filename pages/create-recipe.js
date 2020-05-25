import React, { useReducer } from 'react';
import { reducer, addInstructions, addIngredient }   from '../reducers/recipe-reducer';
import InstructionArea from '../components/createRecipeComponents/instructions-area';

export default () => {
const [recipe, dispatch] = useReducer(reducer, reducer());

  return (
  <>
    <InstructionArea text={ 'Instructions for the recipe' } onChange={() => dispatch(addInstructions()) } />
    <button className='submit-button'>Submit Recipe</button>
  </>
  );
};
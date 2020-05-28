import React, { useReducer } from 'react';
import {
  reducer,
  addInstructions,
  addIngredient,
  removeIngredient,
  changeIngredient,
  changeName
} from '../reducers/recipe-reducer';
import InstructionArea from '../components/createRecipeComponents/instructions-area';
import IngredientList from '../components/createRecipeComponents/ingredient-list';
import LabeledInput from '../components/createRecipeComponents/labeled-input';
import { getEventValue } from '../lib/utils';
import { compose } from 'ramda';

const initialState = {
  name: '',
  instructions: '',
  ingredients: [
    { id: 1, name: 'ingredient name', amount: 'amount' },
    { id: 2, name: '', amount: '' }
  ]
}

export default () => {
const [recipe, dispatch] = useReducer(reducer, initialState);

  return (
  <>
    <LabeledInput 
      labelText = { 'Recipe name: ' }
      inputText = { recipe.name }
      onChange = { text => 
        compose(
          dispatch,
          changeName,
          getEventValue,
        )(text)
      }
    />
    <InstructionArea
      text={ recipe.instructions }
      onChange={ text => 
        compose(
          dispatch,
          addInstructions,
          getEventValue,
        )(text) }
    />
    <IngredientList
      ingredients={ recipe.ingredients }
      onChange={ (id, {name, amount}) => dispatch(changeIngredient(id, {name: name, amount: amount})) }
      onRemove={ id => dispatch(removeIngredient(id)) }
    />
    <button className='submit-button'>Submit Recipe</button>
  </>
  );
};
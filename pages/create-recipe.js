import React, { useReducer } from 'react';
import {
  reducer,
  addInstructions,
  addIngredient,
  removeIngredient,
  changeIngredient,
  changeName
} from '../reducers/recipe-reducer';
import Layout from '../components/layout';
import InstructionArea from '../components/createRecipeComponents/instructions-area';
import IngredientList from '../components/createRecipeComponents/ingredient-list';
import LabeledInput from '../components/createRecipeComponents/labeled-input';
import { getEventValue, getLastElement } from '../lib/utils';
import { compose, curry, last } from 'ramda';
import layout from '../components/layout';

const initialState = {
  name: '',
  instructions: '',
  ingredients: [
    { id: 0, name: 'ingredient name', amount: 'amount' },
    { id: 1, name: '', amount: '' }
  ]
}

// Need to remove all empty ingredients before submitting.
export default () => {
  const [recipe, dispatch] = useReducer(reducer, initialState);

  const addEmptyIngredient = (list) => {
    const lastElement = getLastElement(list);
    const { name, amount } = lastElement;
    return name === '' && amount === '' ? 
      list
    :
      dispatch(addIngredient({id: lastElement.id + 1, name: '', amount: ''}));
  }

  return (
  <Layout>
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
          )(text)
      }
    />
    <IngredientList
      ingredients={ recipe.ingredients }
      onChange={ 
        (id, {name, amount}) => {
          dispatch(changeIngredient(id, {name: name, amount: amount}));
          // TODO: recipe is not updated here
          addEmptyIngredient(recipe.ingredients);
        }  
      }
      onRemove={ id => dispatch(removeIngredient(id)) }
    />
    <button className='submit-button'>Submit Recipe</button>
  </Layout>
  );
};
import React, { button } from 'react';
import InstructionArea from '../components/createRecipeComponents/instructions-area';

export default () => 
  <>
    <InstructionArea text={ 'Instructions for the recipe' } />
    <button className='submit-button'>Submit Recipe</button>
  </>
;
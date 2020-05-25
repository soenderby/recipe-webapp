import { combineReducers } from 'redux';
import recipeReducer from './recipe-reducer';

const rootReducer = () => combineReducers(recipeReducer);

export { rootReducer };
import { combineReducers } from 'redux';
import AnimalsReducer from './reducer_animals'

const rootReducer = combineReducers({
  animals: AnimalsReducer
});

export default rootReducer;

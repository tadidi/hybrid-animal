import { combineReducers } from 'redux';
import AnimalsReducer from './reducer_animals'

// Add a key "animals" to what it's return from the reducer
const rootReducer = combineReducers({
  animals: AnimalsReducer
});

export default rootReducer;

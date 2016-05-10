import { combineReducers } from 'redux';
import AnimalsReducer from './reducer_animals';
import ChosenAnimal from './reducer_chosen_animal';

// Add a key "animals" to what it's return from the reducer
const rootReducer = combineReducers({
  animals: AnimalsReducer,
  chosenAnimal: ChosenAnimal
});

export default rootReducer;

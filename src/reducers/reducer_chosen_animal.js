import { ANIMAL_CHOSEN } from '../actions/index';

// State argument is not application state, only the state
// this reducer is responsible for
export default function(state = null, action) {
    switch(action.type) {
        case ANIMAL_CHOSEN:
            return action.payload;
    }
    return state;
}
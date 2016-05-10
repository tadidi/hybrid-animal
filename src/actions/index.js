export const ANIMAL_CHOSEN = 'ANIMAL_CHOSEN';

export function chosenAnimal(animal) {
    // chosenAnimal is an ActionCreator, it needs to return an action,
    // an object with a type property.

    return {
        type: ANIMAL_CHOSEN,
        payload: animal
    };
}
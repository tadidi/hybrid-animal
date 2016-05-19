import * as types from '../constants/constants'

const initialState = {
  game: {
    animals: [
      {
        name: 'Tiger',
        head: 'Tiger-head',
        body: 'Tiger-body',
        legs: 'Tiger-legs'
      },
      {
        name: 'Elephant',
        head: 'Elephant-head',
        body: 'Elephant-body',
        legs: 'Elephant-legs'
      },
      {
        name: 'Fish',
        head: 'Fish-head',
        body: 'Fish-body',
        legs: 'Fish-legs'
      }
    ],
    rows: [
      {
        name: 'head'
      },
      {
        name: 'body'
      },
      {
        name: 'legs'
      }
    ]
  }
}

export default function drag(state = initialState, action) {
  switch (action.type) {
    case types.DRAG:
      return chosenBodyPart(state, action.draggedAnimal, action.targetZone)
    default:
      return state
  }
}

const chosenBodyPart = (state, draggedAnimal, targetZone) => {

  var zoneOrder = state.game.rows.map(function (row) {
    return row.name; 
  });

  var targetZoneIndex = zoneOrder.indexOf(targetZone.name);
  //var animals = state.game.animals.map(function (animal) {
  //  return animal.name;
  //});

  var animalPart = Object.keys(targetZone).map(function (key) {
    return targetZone[key];
  });

  var stringAnimalPart = animalPart[0];
  var showAnimalPart = draggedAnimal[stringAnimalPart];
  newName = { name: showAnimalPart};

  state.game.rows.splice(targetZoneIndex, 1, newName);

  return state;
}


import * as types from '../constants/constants'
import * as animal from '../constants/animal'

const initialState = {
    game: {
        animals: [
            {
                name: 'Fox',
                icon: types.FOX_ICON,
                head: ['Fox-head', animal.FOX_HEAD, 'Re', '#ae0001'],
                body: ['Fox-body', animal.FOX_BODY, 'n', '#ae0001'],
                legs: ['Fox-legs', animal.FOX_LEGS, 'ard', '#ae0001']
            },
            {
                name: 'Frog',
                icon: types.FROG_ICON,
                head: ['Frog-head', animal.FROG_HEAD, 'Gre', '#4d7358'],
                body: ['Frog-body', animal.FROG_BODY, 'nou', '#4d7358'],
                legs: ['Frog-legs', animal.FROG_LEGS, 'ille', '#4d7358']
            },
            {
                name: 'Zebra',
                icon: types.ZEBRA_ICON,
                head: ['Zebra-head', animal.ZEBRA_HEAD, 'Z', '#000'],
                body: ['Zebra-body', animal.ZEBRA_BODY, 'eb', '#000'],
                legs: ['Zebra-legs', animal.ZEBRA_LEGS, 're', '#000']
            },
            {
                name: 'Giraffe',
                icon: types.GIRAFFE_ICON,
                head: ['Giraffe-head', animal.GIRAFFE_HEAD, 'Gi', '#EB8C00'],
                body: ['Giraffe-body', animal.GIRAFFE_BODY, 'ra', '#EB8C00'],
                legs: ['Giraffe-legs', animal.GIRAFFE_LEGS, 'fe', '#EB8C00']
            },
            {
                name: 'Tiger',
                icon: types.TIGER_ICON,
                head: ['Tiger-head', animal.TIGER_HEAD, 'Ti', '#e55a1e'],
                body: ['Tiger-body', animal.TIGER_BODY, 'g', '#e55a1e'],
                legs: ['Tiger-legs', animal.TIGER_LEGS, 're', '#e55a1e']
            },
            {
                name: 'Elephant',
                icon: types.ELEPHANT_ICON,
                head: ['Elephant-head', animal.ELEPHANT_HEAD, 'El', '#536878'],
                body: ['Elephant-body', animal.ELEPHANT_BODY, 'eph', '#536878'],
                legs: ['Elephant-legs', animal.ELEPHANT_LEGS, 'ant', '#536878']
            },
            {
                name: 'Baboon',
                icon: types.BABOON_ICON,
                head: ['Baboon-head', animal.BABOON_HEAD, 'Ba', '#d3a625'],
                body: ['Baboon-body', animal.BABOON_BODY, 'bou', '#d3a625'],
                legs: ['Baboon-legs', animal.BABOON_LEGS, 'in', '#d3a625']
            },
            {
                name: 'Bear',
                icon: types.BEAR_ICON,
                head: ['Bear-head', animal.BEAR_HEAD, 'Ou', '#8d5524'],
                body: ['Bear-body', animal.BEAR_BODY, 'r', '#8d5524'],
                legs: ['Bear-legs', animal.BEAR_LEGS, 's', '#8d5524']
            },
            {
                name: 'Bat',
                icon: types.BAT_ICON,
                head: ['Bat-head', animal.BAT_HEAD, 'Chauve', '#36454f'],
                body: ['Bat-body', animal.BAT_BODY, '-sou', '#36454f'],
                legs: ['Bat-legs', animal.BAT_LEGS, 'ris', '#36454f']
            }
        ],
        zones: [
            {zone: ['head', types.BODYZONE_HEAD, 'sans', '#FCFAF3']},
            {zone: ['body', types.BODYZONE_BODY, 'n', '#FCFAF3']},
            {zone: ['legs', types.BODYZONE_LEGS, 'om', '#FCFAF3']}
        ]
    }
};


export default function drag(state = initialState, action) {

    switch (action.type) {
        case types.DRAG:
            return reOrderAnimals(state, action.draggedAnimal, action.targetZone);
        default:
            return state
    }
}

const reOrderAnimals = (state, draggedAnimal, targetZone) => {

    //Give back an array with the zone name
    var zoneOrder = ["head", "body", "legs"];

    //Give back an object with the value of the drop zone
    var animalPart = targetZone[Object.keys(targetZone)[0]].valueOf();

    //Give back only the value of the zone
    var part = (animalPart.zone)[0];

    //search 'head' 'body' and 'legs'
    var findPart = function (string) {
        if ((string.search('head')) != -1) {
            return 'head';
        } else if ((string.search('body')) != -1) {
            return 'body';
        } else if ((string.search('legs')) != -1) {
            return 'legs';
        } else return 'error';
    };
    var result = findPart(part);

    //Access to the good zone in animal and give back the good part
    var showAnimalPart = draggedAnimal['animal'][result];

    //Make a new object with the good part
    var newName = {zone: showAnimalPart};

    //Get back the index of the body part where we want to drop
    var targetZoneIndex = zoneOrder.indexOf(result);

    //Insert the new name and delete the zone part
    let newZones = state.game.zones.map((bodyZone) => bodyZone);
    newZones.splice(targetZoneIndex, 1, newName);

    //Map over the animals, no changes
    let animal = state.game.animals.map((animal) => animal);

    return {game: {animals: animal, zones: newZones}}
};

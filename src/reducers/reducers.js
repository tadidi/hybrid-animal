import * as types from '../constants/constants'
import * as animal from '../constants/animal'

const initialState = {
	game: {
		animals: [
			{
                name:'Tiger',
                icon: types.TIGER_ICON,
                head: ['Tiger-head','0 0 480 168',animal.TIGER_HEAD,'Ti'],
                body: ['Tiger-body','0 0 350 348',animal.TIGER_BODY,'g'],
                legs: ['Tiger-legs','0 0 480 514',animal.TIGER_LEGS,'re']
            },
			{
				name: 'Elephant',
                icon: types.ELEPHANT_ICON,
                head: ['Elephant-head','0 0 480 168',animal.ELEPHANT_HEAD,'El'],
				body: ['Elephant-body','0 0 350 348',animal.ELEPHANT_BODY,'éph'],
				legs: ['Elephant-legs','0 0 480 514',animal.ELEPHANT_LEGS,'ant']
            },
			{
				name: 'Baboon',
                icon: types.BABOON_ICON,
                head: ['Baboon-head','0 0 480 168',animal.BABOON_HEAD,'Ba'],
				body: ['Baboon-body','0 0 350 348',animal.BABOON_BODY,'bou'],
				legs: ['Baboon-legs','0 0 480 514',animal.BABOON_LEGS,'in']
			},
            {
                name: 'Frog',
                icon: types.FROG_ICON,
                head: ['Frog-head','0 0 480 168',animal.FROG_HEAD,'Gre'],
                body: ['Frog-body','0 0 350 348',animal.FROG_BODY,'nou'],
                legs: ['Frog-legs','0 0 480 514',animal.FROG_LEGS,'ille']
            },
            {
                name: 'Bear',
                icon: types.BEAR_ICON,
                head: ['Bear-head','0 0 480 168',animal.BEAR_HEAD,'Ou'],
                body: ['Bear-body','0 0 350 348',animal.BEAR_BODY,'r'],
                legs: ['Bear-legs','0 0 480 514',animal.BEAR_LEGS,'s']
            },
            {
                name: 'Panda',
                icon: types.PANDA_ICON,
                head: ['Panda-head','0 0 480 168',animal.BABOON_HEAD,'Pan'],
                body: ['Panda-body','0 0 350 348',animal.BABOON_BODY,'d'],
                legs: ['Panda-legs','0 0 480 514',animal.BABOON_LEGS,'a']
            },
            {
                name: 'Zèbre',
                icon: types.ZEBRE_ICON,
                head: ['Zebre-head','0 0 480 168',animal.BABOON_HEAD,'Z'],
                body: ['Zebre-body','0 0 350 348',animal.BABOON_BODY,'èb'],
                legs: ['Zebre-legs','0 0 480 514',animal.BABOON_LEGS,'re']
            },
            {
                name: 'Chauve-souris',
                icon: types.CHAUVESOURIS_ICON,
                head: ['Chauve-souris-head','0 0 480 168',animal.BABOON_HEAD,'Chauve'],
                body: ['Chauve-souris-body','0 0 350 348',animal.BABOON_BODY,'-sou'],
                legs: ['Chauve-souris-legs','0 0 480 514',animal.BABOON_LEGS,'ris']
            },
            {
                name: 'Buffle',
                icon: types.BUFFLE_ICON,
                head: ['Buffle-head','0 0 480 168',animal.BABOON_HEAD,'B'],
                body: ['Buffle-body','0 0 350 348',animal.BABOON_BODY,'u'],
                legs: ['Buffle-legs','0 0 480 514',animal.BABOON_LEGS,'ffle']
            },
            {
                name: 'Giraffe',
                icon: types.GIRAFFE_ICON,
                head: ['Giraffe-head','0 0 480 168',animal.BABOON_HEAD,'Gir'],
                body: ['Giraffe-body','0 0 350 348',animal.BABOON_BODY,'ra'],
                legs: ['Giraffe-legs','0 0 480 514',animal.BABOON_LEGS,'ffe']
            },
            {
                name: 'Renard',
                icon: types.RENARD_ICON,
                head: ['Renard-head','0 0 480 168',animal.BABOON_HEAD,'Re'],
                body: ['Renard-body','0 0 350 348',animal.BABOON_BODY,'n'],
                legs: ['Renard-legs','0 0 480 514',animal.BABOON_LEGS,'ard']
            }

		],
		zones: [
			{zone: ['head','0 0 480 168',types.BODYZONE_HEAD,'No']},
			{zone: ['body','0 0 350 348',types.BODYZONE_BODY,'Na']},
			{zone: ['legs','0 0 480 514',types.BODYZONE_LEGS,'me']}
		]
	}
}



export default function drag(state = initialState, action) {

	switch (action.type) {
		case types.DRAG:
			return reOrderAnimals(state, action.draggedAnimal, action.targetZone)
		default:
			return state
	}
}

const reOrderAnimals = (state, draggedAnimal, targetZone) => {

    //Give back an array with the zone name
    var zoneOrder = ["head", "body", "legs"];

    //Give back an object with the value of the drop zone
    var animalPart = targetZone[Object.keys(targetZone)[0]].valueOf()

    //Give back only the value of the zone
    var part = (animalPart.zone)[0];

    //search 'head' 'body' and 'legs'
    var findPart = function(string) {
        if ((string.search('head')) != -1) {
            return 'head';
        } else if ((string.search('body')) != -1) {
            return 'body';
        } else if ((string.search('legs')) != -1) {
            return 'legs';
        } else return 'error';
    }
    var result = findPart(part);

    //Access to the good zone in the animal and give back the good part
    var showAnimalPart = draggedAnimal['animal'][result];

    //Make a new object with the good part
    var newName = { zone: showAnimalPart };

    //Get back the index of the body part where we want to drop
    var targetZoneIndex = zoneOrder.indexOf(result);

    //Insert the new name and delete the zone part
    let newZones = state.game.zones.map((bodyZone) => bodyZone)
    newZones.splice(targetZoneIndex, 1, newName);


    //Map over the animals no changes
    let animal = state.game.animals.map((animal) => animal)

	return { game: { animals: animal, zones: newZones } }
}

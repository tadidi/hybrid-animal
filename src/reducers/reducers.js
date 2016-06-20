import * as types from '../constants/constants'
import * as animal from '../constants/animal'

const initialState = {
	game: {
		animals: [
			{
                name:'Tiger',
                icon: types.TIGER_ICON,
                head: ['Tiger-head','0 0 480 126',animal.ELEPHANT_HEAD,['#D3D2E0'],'Ti'],
                body: ['Tiger-body','0 0 299 348',animal.ELEPHANT_BODY, ['#D3D2E0'],'g'],
                legs: ['Tiger-legs','0 0 480 514',animal.ELEPHANT_LEGS, ['#D3D2E0'],'re']
            },
			{
				name: 'Elephant',
                icon: types.ELEPHANT_ICON,
                head: ['Elephant-head','0 0 480 126',animal.ELEPHANT_HEAD,['#D3D2E0'],'El'],
				body: ['Elephant-body','0 0 299 348',animal.ELEPHANT_BODY, ['#D3D2E0'],'éph'],
				legs: ['Elephant-legs','0 0 480 514',animal.ELEPHANT_LEGS, ['#D3D2E0'],'ant']
            },
			{
				name: 'Baboon',
                icon: types.BABOON_ICON,
                head: ['Baboon-head','0 0 480 126',animal.BABOON_HEAD, ['#D3D2E0'],'Ba'],
				body: ['Baboon-body','0 0 299 348',animal.BABOON_BODY, ['#D3D2E0'],'bou'],
				legs: ['Baboon-legs','0 0 480 514',animal.BABOON_LEGS, ['#D3D2E0'],'in']
			},
            {
                name: 'Frog',
                icon: types.FROG_ICON,
                head: ['Frog-head','0 0 480 126',animal.BABOON_HEAD, ['#D3D2E0'],'Gre'],
                body: ['Frog-body','0 0 299 348',animal.BABOON_BODY, ['#D3D2E0'],'nou'],
                legs: ['Frog-legs','0 0 480 514',animal.BABOON_LEGS, ['#D3D2E0'],'ille']
            },
            {
                name: 'Bear',
                icon: types.BEAR_ICON,
                head: ['Bear-head','0 0 480 126',animal.BABOON_HEAD, ['#D3D2E0'],'Ou'],
                body: ['Bear-body','0 0 299 348',animal.BABOON_BODY, ['#D3D2E0'],'r'],
                legs: ['Bear-legs','0 0 480 514',animal.BABOON_LEGS, ['#D3D2E0'],'s']
            },
            {
                name: 'Panda',
                icon: types.PANDA_ICON,
                head: ['Panda-head','0 0 480 126',animal.BABOON_HEAD, ['#D3D2E0'],'Pan'],
                body: ['Panda-body','0 0 299 348',animal.BABOON_BODY, ['#D3D2E0'],'d'],
                legs: ['Panda-legs','0 0 480 514',animal.BABOON_LEGS, ['#D3D2E0'],'a']
            }

		],
		zones: [
			{zone: ['head','0 0 480 126',types.BODYZONE_HEAD, ['#D3D2E0'],'No']},
			{zone: ['body','0 0 299 348',types.BODYZONE_BODY, ['#D3D2E0'],'Na']},
			{zone: ['legs','0 0 480 514',types.BODYZONE_LEGS, ['#D3D2E0'],'me']}
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

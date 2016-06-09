import * as types from '../constants/constants'

const initialState = {
	game: {
		animals: [
			{
                name:'Tiger',
                icon: types.TIGER_ICON,
                head: ['Tiger-head','0 0 480 160','M156.273 5.586c-9.635 0-19.333-1.1-28.905 0-5.2.598-21.575 10.908-24.23 12.872-1.467 1.086-6.035 6.294-7.57 8.707-4.69 7.37-6.514 15.2-4.544 24.23.986 4.52 7.718 11.148 11.357 14.007 11.3 8.877 26.95 15.65 41.65 13.25 2.46-.4 4.62-1.87 6.82-3.028 4.6-2.423 9.11-5.027 12.5-9.085 9.57-11.49 16.3-32.59 9.47-46.57-1.83-3.76-3.66-7.56-6.05-10.98-2.1-2.99-13.55-10.75-16.04-4.55-.15.39 0 .84 0 1.26'],
				body: ['Tiger-body','140 160 160 300','M114.485 27.53c3.23.685 4.11 1.045 8.214.51.25-.033-.12-.533 0-.76.15-.318.64-.416.75-.756.35-1.105-.15-2.587-1.52-2.78-1.25-.18-4.64-.43-6.06.755-1.21 1.01-2.01 4.31.51 4.31m33.59-1.87c0 1.76-.53 5.39.75 7.32.14.21.54-.13.76 0 2.96 1.78 7 4.93 10.98 3.41.63-.25.68-1.22.75-1.89.18-1.76.33-3.57 0-5.31-1.09-5.71-16.28-10.83-16.28-1.63m-14.4 16.32c-2.23 3.35-5.83 8.27-6.95 12.12-.46 1.58-1.5 4.24 0 4.92l.38.75c3.67 1.67 15.69 2.22 16.03.38.17-.91 0-1.855 0-2.78m-4.73 17.75c-8.12.31-17.77.01-25.12 4.16-1.98 1.12-3.7 2.662-5.68 3.784-1.82 1.03-3.9 1.55-5.68 2.65-4.75 2.945-8.65 12.59-10.22 17.417-2.7 8.27-2.57 16.89-3.41 25.363-3.035 30.63-6.896 52.83-4.543 84.044.395 5.22 2.53 10.17 4.17 15.145 4.91 14.92 12.53 28.16 19.68 42.02 1.66 3.21 2.89 6.632 4.546 9.843 6.293 12.19 12.38 24.5 19.31 36.34 7.292 12.464 14.32 22.485 29.15 23.473 2.015.134 4.11.54 6.057 0 5.266-1.46 12.67-7.236 16.28-10.6 14.87-13.857 24.857-32.63 31.8-51.49 8.25-22.39 14.368-56.13 9.09-79.88-2.01-9.054-5.428-10.79-9.84-17.416-.63-.94-1.107-1.98-1.52-3.03-2.113-5.39-4.24-10.78-6.056-16.28-3.138-9.51-7.057-22.485-8.708-32.937-.48-3.002-.64-6.05-.76-9.085-.13-3.28.68-6.634 0-9.843-.17-.78-1.61-.31-2.27-.76-2.15-1.467-4.13-3.178-6.06-4.924-35.4-32.02-.28.19-12.12-12.5-3.297-3.53-15.657-11.66-20.448-13.63-.468-.19-1.01.014-1.515 0l-.38-.38c-4.504-.122-9.02.25-13.515 0-.25-.014.096-.522 0-.756h-.5c-.156-.395.3-.97 0-1.27-.296-.3-.902.217-1.264 0-.216-.13.14-.55 0-.76-.094-.14-.39.12-.51 0-.762-.763 1.306-.51-.76-.51m60.86 36.145c3.197 3.2 7.54 3.94 11.49 5.81 12.836 6.08 27.998 6.687 42.024 5.3 1.95-.19 9.05-3.24 11.74-4.92.6-.375.86-1.21 1.51-1.51 1.06-.49 2.3-.39 3.41-.76.12-.04 0-.25 0-.377m-49.32 153.5c10.4 0 5.91-.51 19.57 3.03 17.88 4.633 31.29 17.7 36.34 35.585 2.384 8.467 1.29 8.825 1.51 18.55.106 4.64 1.135 7.027 1.135 11.49'],
				legs: ['Tiger-legs','0 160 480 500','M88.704 120.927c-13.043 0-26.087.222-39.128 0-11.044-.188-28.245-16.62-34.072-23.094-3.513-3.904-6.225-8.468-9.088-12.87-1.28-1.97-4.163-7.844-4.163-9.088m102.09 190.807c-6.29 0-12.374-1.457-18.683-1.513-34.796-.31-27.766-.89-50.733 2.65-6.26.96-15.877.7-19.308 7.57-.47.93-.36 2.06-.76 3.03-4.06 9.74-4.37 18.68-6.82 29.15-.71 3.01-4.17 11.02-4.17 14.38']
			},
			{
				name: 'Elephant',
                icon: types.ELEPHANT_ICON,
                head: ['Elephant-head','0 0 480 126',types.ELEPHANT_HEAD],
				body: ['Elephant-body','0 0 299 348',types.ELEPHANT_BODY],
				legs: ['Elephant-legs','0 0 480 514',types.ELEPHANT_LEGS]
			},
			{
				name: 'Baboon',
                icon: types.BABOON_ICON,
                head: ['Baboon-head','0 0 480 160','M44.264.84C41.097 21.51 2.684 39.362.66 74.322c-1.1 19.06 13.648 39.423 28.644 43.39m15.106 33.216c-.927-7.768-15.084-13.443-15.012-26.583.05-8.624 6.997-13.275 11.392-15.33'],
				body: ['Baboon-body','0 160 200 300','M52.567,68.407a2.741,2.741 0 1,0 5.482,0a2.741,2.741 0 1,0 -5.482,0'],
				legs: ['Baboon-legs','0 160 480 500','M68.207 80.229s-7.693-.153-10.859 1.571c0 0-1.381.632-1.381 2.011 0 0-.058 1.724 1.267 2.184 1.323.46 4.546-.518 7.366 4.885 0 0 .863 1.771 2.763 1.771h.863M78.862 83.811s1.168-10.282-4.666-21.282M85.808 103.033c-.573 6.766-7.026 10.745-18.709 10.745-11.75 0-18.75-4.25-18.75-11.75']
			}
		],
		zones: [
			{zone: ['head','0 0 480 126',types.BODYZONE_HEAD]},
			{zone: ['body','0 0 299 348',types.BODYZONE_BODY]},
			{zone: ['legs','0 0 480 514',types.BODYZONE_LEGS]}
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

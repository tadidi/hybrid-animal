import * as types from '../constants/constants'

const initialState = {
	game: {
		animals: [
			{
                name:'Tiger',
                icon: ['M56.038 116.278c-28.875-2.695-35.125-20.125-35.125-20.125s-3.834 5.542-3.75 5.125c.084-.417.375-.792-1.875-8.875s-1.875-17.875-1.875-17.875c-.661-1.27-1.839.103-1.839.103-2.667 3.333-7.167 3.5-7.167 3.5 3-2.666 2.968-16.978 2.968-16.978C8.538 27.528 34.626 1.528 67.625 1.528v39.5',
                    'M17.276 28.966c-1.615-.264-3.209-.826-4.703-1.705-6.479-3.813-8.099-11.944-4.287-18.423 3.815-6.479 11.616-8.854 18.096-5.041 3.309 1.948 5.491 5.075 6.326 8.534',
                    'M20.973 22.284c-2.989.084-5.481-2.272-5.564-5.263-.084-2.99 2.273-5.481 5.263-5.565 2.991-.083 5.482 2.273 5.566 5.264M49.308 53.194c0 2.854-2.313 5.167-5.167 5.167-2.854 0-5.167-2.312-5.167-5.167 0-1.53.665-2.904 1.722-3.851.914-.818 2.122-1.316 3.445-1.316 2.854 0 5.167 2.314 5.167 5.167zM47.367 57.387l3.024 3.474M36.975 45.444l3.497 4.02M25.724 38.028s-14.5 8.875-9.25 30.5c0 0 4.188 17.227 21.856 22.926 0 0 1.311.241 2.311.491M21.721 58.923s-.753 16.688 14.009 23.675M27.377 61.756s.181 10.63 9.759 14.258M46.497 18.835c5.226-5.26 12.78-8.276 20.726-8.276 7.949 0 15.504 3.017 20.731 8.276M53.293 24.966c3.422-3.443 8.49-5.489 13.93-5.489h.002c5.437 0 10.51 2.046 13.933 5.49M60.457 30.75c1.636-1.442 4.062-2.355 6.769-2.355 2.583 0 4.909.832 6.537 2.16M66.505 80.229s7.693-.153 10.859 1.571c0 0 1.381.632 1.381 2.011 0 0 .058 1.724-1.267 2.184-1.323.46-4.546-.518-7.366 4.885 0 0-.863 1.771-2.763 1.771h-.863M55.975 83.811s-1.168-10.282 4.666-21.282',
                    'M67.349 92.653c-.396 6.351-6.567 11.134-13.785 10.683-7.217-.452-12.745-5.967-12.348-12.317.338-5.423 2.716-8.305 6.861-9.002M67.638 1.528c32.999 0 59.087 26 60.25 59.625 0 0-.032 14.312 2.968 16.978 0 0-4.5-.167-7.167-3.5 0 0-1.178-1.372-1.839-.103 0 0 .375 9.792-1.875 17.875s-1.959 8.458-1.875 8.875c.084.417-3.75-5.125-3.75-5.125s-6.25 17.43-35.125 20.125',
                    'M117.987 28.966c1.615-.264 3.209-.826 4.703-1.705 6.479-3.813 8.099-11.944 4.287-18.423-3.815-6.479-11.616-8.854-18.096-5.041-3.309 1.948-5.491 5.075-6.326 8.534',
                    'M114.29 22.284c2.989.084 5.481-2.272 5.564-5.263.084-2.99-2.273-5.481-5.263-5.565-2.991-.083-5.482 2.273-5.566 5.264M85.955 53.194c0 2.854 2.313 5.167 5.167 5.167 2.854 0 5.167-2.312 5.167-5.167 0-1.53-.665-2.904-1.722-3.851-.914-.818-2.122-1.316-3.445-1.316-2.854 0-5.167 2.314-5.167 5.167zM87.896 57.387l-3.024 3.474M98.288 45.444l-3.497 4.02M109.539 38.028s14.5 8.875 9.25 30.5c0 0-4.188 17.227-21.856 22.926 0 0-1.311.241-2.311.491M113.542 58.923s.753 16.688-14.009 23.675M107.885 61.756s-.181 10.63-9.759 14.258M67.914 92.653c.396 6.351 6.567 11.134 13.785 10.683 7.217-.452 12.745-5.967 12.348-12.317-.338-5.423-2.716-8.305-6.861-9.002M88.215 18.835c-5.226-5.26-12.78-8.276-20.726-8.276-7.949 0-15.504 3.017-20.731 8.276M81.418 24.966c-3.422-3.443-8.49-5.489-13.93-5.489h-.003c-5.436 0-10.509 2.046-13.932 5.49M74.255 30.75c-1.636-1.442-4.062-2.355-6.769-2.355-2.583 0-4.909.832-6.537 2.16',
                    'M68.207 80.229s-7.693-.153-10.859 1.571c0 0-1.381.632-1.381 2.011 0 0-.058 1.724 1.267 2.184 1.323.46 4.546-.518 7.366 4.885 0 0 .863 1.771 2.763 1.771h.863M78.862 83.811s1.168-10.282-4.666-21.282M85.808 103.033c-.573 6.766-7.026 10.745-18.709 10.745-11.75 0-18.75-4.25-18.75-11.75'],
                head: ['Tiger-head','M156.273 5.586c-9.635 0-19.333-1.1-28.905 0-5.2.598-21.575 10.908-24.23 12.872-1.467 1.086-6.035 6.294-7.57 8.707-4.69 7.37-6.514 15.2-4.544 24.23.986 4.52 7.718 11.148 11.357 14.007 11.3 8.877 26.95 15.65 41.65 13.25 2.46-.4 4.62-1.87 6.82-3.028 4.6-2.423 9.11-5.027 12.5-9.085 9.57-11.49 16.3-32.59 9.47-46.57-1.83-3.76-3.66-7.56-6.05-10.98-2.1-2.99-13.55-10.75-16.04-4.55-.15.39 0 .84 0 1.26'],
				body: ['Tiger-body','M114.485 27.53c3.23.685 4.11 1.045 8.214.51.25-.033-.12-.533 0-.76.15-.318.64-.416.75-.756.35-1.105-.15-2.587-1.52-2.78-1.25-.18-4.64-.43-6.06.755-1.21 1.01-2.01 4.31.51 4.31m33.59-1.87c0 1.76-.53 5.39.75 7.32.14.21.54-.13.76 0 2.96 1.78 7 4.93 10.98 3.41.63-.25.68-1.22.75-1.89.18-1.76.33-3.57 0-5.31-1.09-5.71-16.28-10.83-16.28-1.63m-14.4 16.32c-2.23 3.35-5.83 8.27-6.95 12.12-.46 1.58-1.5 4.24 0 4.92l.38.75c3.67 1.67 15.69 2.22 16.03.38.17-.91 0-1.855 0-2.78m-4.73 17.75c-8.12.31-17.77.01-25.12 4.16-1.98 1.12-3.7 2.662-5.68 3.784-1.82 1.03-3.9 1.55-5.68 2.65-4.75 2.945-8.65 12.59-10.22 17.417-2.7 8.27-2.57 16.89-3.41 25.363-3.035 30.63-6.896 52.83-4.543 84.044.395 5.22 2.53 10.17 4.17 15.145 4.91 14.92 12.53 28.16 19.68 42.02 1.66 3.21 2.89 6.632 4.546 9.843 6.293 12.19 12.38 24.5 19.31 36.34 7.292 12.464 14.32 22.485 29.15 23.473 2.015.134 4.11.54 6.057 0 5.266-1.46 12.67-7.236 16.28-10.6 14.87-13.857 24.857-32.63 31.8-51.49 8.25-22.39 14.368-56.13 9.09-79.88-2.01-9.054-5.428-10.79-9.84-17.416-.63-.94-1.107-1.98-1.52-3.03-2.113-5.39-4.24-10.78-6.056-16.28-3.138-9.51-7.057-22.485-8.708-32.937-.48-3.002-.64-6.05-.76-9.085-.13-3.28.68-6.634 0-9.843-.17-.78-1.61-.31-2.27-.76-2.15-1.467-4.13-3.178-6.06-4.924-35.4-32.02-.28.19-12.12-12.5-3.297-3.53-15.657-11.66-20.448-13.63-.468-.19-1.01.014-1.515 0l-.38-.38c-4.504-.122-9.02.25-13.515 0-.25-.014.096-.522 0-.756h-.5c-.156-.395.3-.97 0-1.27-.296-.3-.902.217-1.264 0-.216-.13.14-.55 0-.76-.094-.14-.39.12-.51 0-.762-.763 1.306-.51-.76-.51m60.86 36.145c3.197 3.2 7.54 3.94 11.49 5.81 12.836 6.08 27.998 6.687 42.024 5.3 1.95-.19 9.05-3.24 11.74-4.92.6-.375.86-1.21 1.51-1.51 1.06-.49 2.3-.39 3.41-.76.12-.04 0-.25 0-.377m-49.32 153.5c10.4 0 5.91-.51 19.57 3.03 17.88 4.633 31.29 17.7 36.34 35.585 2.384 8.467 1.29 8.825 1.51 18.55.106 4.64 1.135 7.027 1.135 11.49'],
				legs: ['Tiger-legs','M88.704 120.927c-13.043 0-26.087.222-39.128 0-11.044-.188-28.245-16.62-34.072-23.094-3.513-3.904-6.225-8.468-9.088-12.87-1.28-1.97-4.163-7.844-4.163-9.088m102.09 190.807c-6.29 0-12.374-1.457-18.683-1.513-34.796-.31-27.766-.89-50.733 2.65-6.26.96-15.877.7-19.308 7.57-.47.93-.36 2.06-.76 3.03-4.06 9.74-4.37 18.68-6.82 29.15-.71 3.01-4.17 11.02-4.17 14.38']
			},
			{
				name: 'Elephant',
                icon: ['M67.678 1.117S56.303-.758 45.553 7.867c0 0-1.125 1-2.375.125 0 0-12.5-5.625-39 16.375 0 0-6.75 5.25-2.75 13.25s13 39 39.5 45.75m1.54 2.16s-2.83 19.673-21.204 39.885c0 0 14.388-2.615 28.914-36.545m2.25-13.666s7.334 17 5.334 49c0 0 0 5.67-2.334 8.67m-.125.22c-.528.884-.708 1.93-.708 3.03 0 3.28 2.692 5.938 6.01 5.938 3.318 0 6.01-2.658 6.01-5.938 0 0-.103-2.084 1.063-2.084 0 0 1.062-.083 1.062 2.083 0 3.28 2.692 5.936 6.01 5.936 3.318 0 6.01-2.658 6.01-5.938 0-1.1-.18-2.147-.707-3.03M67.678 1.115S79.053-.76 89.803 7.865c0 0 1.125 1 2.375.126 0 0 12.5-5.622 39 16.378 0 0 6.75 5.25 2.75 13.25s-13 39-39.5 45.75m-1.54 2.16s2.83 19.673 21.204 39.885c0 0-14.387-2.74-28.914-36.67m-2.25-13.54s-7.334 17-5.334 49c0 0 0 5.666 2.334 8.666M60.51 75.853s5.152-3.808 14.335-.224M62.583 87.92s3.662-2.708 10.19-.16m-9.91 11.59s3.46-2.558 9.63-.15m-8.454 12.1s2.612-1.933 7.275-.112m-7.28 11.31s2.617-1.933 7.28-.112',
                    'M41.927,42.617a4,4 0 1,0 8,0a4,4 0 1,0 -8,0',
                    'M85.429,42.617a4,4 0 1,0 8,0a4,4 0 1,0 -8,0',
                    'M43.073 18.868c-6.025 5.684-10.054 13.53-10.782 22.434-.9 11.017 3.44 21.254 10.94 28.254 0 0 .89.562.577 2-.313 1.436-2.062 10.56-2.062 10.56s-1.188 4.876 5.438 6.25c0 0 3.876 1.25 5.75-2.624l1.376-3.125m37.98-63.75c6.023 5.685 10.052 13.53 10.78 22.435.902 11.017-3.438 21.254-10.937 28.254 0 0-.89.562-.577 2 .313 1.436 2.062 10.56 2.062 10.56s1.188 4.876-5.438 6.25c0 0-3.876 1.25-5.75-2.624l-1.376-3.125'],
                head: ['Elephant-head','M117.987 28.966c1.615-.264 3.209-.826 4.703-1.705 6.479-3.813 8.099-11.944 4.287-18.423-3.815-6.479-11.616-8.854-18.096-5.041-3.309 1.948-5.491 5.075-6.326 8.534'],
				body: ['Elephant-body','M68.207 80.229s-7.693-.153-10.859 1.571c0 0-1.381.632-1.381 2.011 0 0-.058 1.724 1.267 2.184 1.323.46 4.546-.518 7.366 4.885 0 0 .863 1.771 2.763 1.771h.863M78.862 83.811s1.168-10.282-4.666-21.282M85.808 103.033c-.573 6.766-7.026 10.745-18.709 10.745-11.75 0-18.75-4.25-18.75-11.75'],
				legs: ['Elephant-legs','M30.859,68.407a2.741,2.741 0 1,0 5.482,0a2.741,2.741 0 1,0 -5.482,0']
			},
			{
				name: 'Baboon',
                icon: ['M44.264.84C41.097 21.51 2.684 39.362.66 74.322c-1.1 19.06 13.648 39.423 28.644 43.39m15.106 33.216c-.927-7.768-15.084-13.443-15.012-26.583.05-8.624 6.997-13.275 11.392-15.33',
                    'M44.3 1.13c0 19.85-10.616 30.427-10.616 43.367 0 6.098 3.448 7.805 6.896 8.706 0 0 1.275.42 3.802.42m.06 10.295H29.426c-1.582 0-3.72-1.18-3.72-2.636 0-1.455 2.07-2.636 3.652-2.636h15.018m-6.69 5.844s2.147 1.264 1.895 14.785c0 0 .34 21.565.85 23.334.51 1.76 2.36 5.99 1.69 6.29 0 0-4.97 3.1-6.15 3.94-.92.65-2.27 2.27-2.27 4.21 0 2.78 1.096 6.65 10.616 6.65M29.37 81.09s4.216-1.065 9.586 2.347m-10.8 5.982s5.49-1.56 11.305 2.86m-8.86 5.69s4.34-1.377 9.43 3.533',
                    'M41.27 118.694s-2.036-2.966-2.723-2.02c-.752 1.035.906 1.412 2.724 2.02zm-5.437 9.75s1.895-3.974 8.466-3.974m-5.1-53.914s-12.13 2.4-12.01 17.438c0 0 .25 11.5 9.85 24.134M44.65.84c3.17 20.67 41.58 38.522 43.608 73.482 1.105 19.06-13.644 39.423-28.64 43.39m-15.16 33.184c.927-7.768 15.14-13.412 15.07-26.55-.05-8.625-6.998-13.276-11.393-15.332',
                    'M44.623 1.13c0 19.85 10.615 30.427 10.615 43.367 0 6.098-3.448 7.805-6.896 8.706 0 0-1.275.42-3.802.42m-.06 10.295h15.016c1.582 0 3.72-1.18 3.72-2.636 0-1.455-2.07-2.636-3.652-2.636h-15.02m6.693 5.844s-2.147 1.264-1.896 14.785c0 0-.33 21.565-.84 23.334-.5 1.76-2.36 5.99-1.68 6.29 0 0 4.97 3.1 6.15 3.94.92.65 2.28 2.27 2.28 4.21 0 2.78-1.094 6.65-10.614 6.65M59.57 81.09s-4.216-1.068-9.585 2.344M60.78 89.42s-5.492-1.56-11.304 2.863m8.86 5.687s-4.34-1.372-9.426 3.538',
                    'M47.694 118.745s1.926-3.04 2.648-2.118c.79 1.006-.854 1.443-2.648 2.118zm5.396 9.698s-1.896-3.973-8.467-3.973m5.097-53.914s12.132 2.4 12.006 17.438c0 0-.253 11.5-9.856 24.134',
                    'M30.859,68.407a2.741,2.741 0 1,0 5.482,0a2.741,2.741 0 1,0 -5.482,0',
                    'M52.567,68.407a2.741,2.741 0 1,0 5.482,0a2.741,2.741 0 1,0 -5.482,0'],
                head: ['Baboon-head','M44.264.84C41.097 21.51 2.684 39.362.66 74.322c-1.1 19.06 13.648 39.423 28.644 43.39m15.106 33.216c-.927-7.768-15.084-13.443-15.012-26.583.05-8.624 6.997-13.275 11.392-15.33'],
				body: ['Baboon-body','M52.567,68.407a2.741,2.741 0 1,0 5.482,0a2.741,2.741 0 1,0 -5.482,0'],
				legs: ['Baboon-legs','M68.207 80.229s-7.693-.153-10.859 1.571c0 0-1.381.632-1.381 2.011 0 0-.058 1.724 1.267 2.184 1.323.46 4.546-.518 7.366 4.885 0 0 .863 1.771 2.763 1.771h.863M78.862 83.811s1.168-10.282-4.666-21.282M85.808 103.033c-.573 6.766-7.026 10.745-18.709 10.745-11.75 0-18.75-4.25-18.75-11.75']
			}
		],
		zones: [
			{
				zone: ['head','M41.927,42.617a4,4 0 1,0 8,0a4,4 0 1,0 -8,0'
                ]
			},
			{
				zone: ['body','M41.927,42.617a4,4 0 1,0 8,0a4,4 0 1,0 -8,0'
                ]
			},
			{
				zone: ['legs','M41.927,42.617a4,4 0 1,0 8,0a4,4 0 1,0 -8,0'
                ]
			}
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
    let newzones = state.game.zones.map((bodyZone) => bodyZone)
    newzones.splice(targetZoneIndex, 1, newName);


    //Map over the animals no changes
    let animal = state.game.animals.map((animal) => animal)

	return { game: { animals: animal, zones: newzones } }
}
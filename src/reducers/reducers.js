import * as types from '../constants/constants'

const initialState = {
	table: {
		headings: [
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
				zone: 'head'
			},
			{
				zone: 'body'
			},
			{
				zone: 'legs'
			}
		]
	}
}

export default function drag(state = initialState, action) {
	console.log('00')

	switch (action.type) {
		case types.DRAG:
			console.log('01')
			return reOrderCols(state, action.draggedCol, action.targetCol)
		default:
			return state
	}
}

const reOrderCols = (state, draggedCol, targetCol) => {


    //Give back an array with the zone name
    var zoneOrder = ["head","body","legs"];
    //Give back an array with the value of the prop zone
    var animalPart = targetCol[Object.keys(targetCol)[0]].valueOf();
    var zonePart = animalPart.zone;
    //Access to the good zone in the animal and give back the good part
    var showAnimalPart = draggedCol['column'][zonePart];
    //Make a new object with the good part
    var newName = { zone: showAnimalPart };
    //Get back the index of the body part where we want to drop
    var targetColIndex = zoneOrder.indexOf(zonePart);
    //Insert the new name and delete the zone part
    let newRows = state.table.rows.map((row) => row)
    newRows.splice(targetColIndex, 1, newName);


    //Map over the headings no changes
    let column = state.table.headings.map((column) => column)

	return { table: { headings: column, rows: newRows } }
}

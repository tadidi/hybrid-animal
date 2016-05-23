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
	console.log('01')

	switch (action.type) {
		case types.DRAG:
			console.log('00')
			return reOrderCols(state, action.draggedCol, action.targetCol)
		default:
			return state
	}
}

const reOrderCols = (state, draggedCol, targetCol) => {
	let colOrder = state.table.headings.map((heading) => heading.name)
	let columns = state.table.headings.slice()
	let draggedColIndex = colOrder.indexOf(draggedCol.name)
	let targetColIndex = colOrder.indexOf(targetCol.name)

	columns.splice(draggedColIndex, 1)
	columns.splice(targetColIndex, 0, draggedCol)

	let rowOrder = columns.map((col) => {
		return state.table.rows.filter((row) => {
			if (col.name === row.column) return row
		})[0]
	})

	return { table: { headings: columns, rows: rowOrder } }
}

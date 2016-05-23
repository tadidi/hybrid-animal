import React, { Component as C} from 'react'
import { DropTarget } from 'react-dnd'
import { pipe } from 'ramda'



const headingTarget = {
	drop(props, monitor) {
		let draggedCol = monitor.getItem()
		let targetCol = props.column
		// trigger drag action
		props.drag(draggedCol, targetCol)
	}
}



function collectDrop(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop()
	}
}

const Column2 = ({ column, connectDropTarget, isOver, isDragging }) => (
	<th style={{
			opacity: isOver ? 0.5 : 1,
			backgroundColor: isOver ? 'yellow' : 'inherit'
		}}>

		{
			connectDropTarget(
				<div className="col-lg-8">
					{column.name} target2
				</div>
			)
		}
	</th>
)

export default pipe(DropTarget('column', headingTarget, collectDrop))(Column2)

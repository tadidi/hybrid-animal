import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'



const headingTarget = {
	drop(props, monitor) {
		let draggedCol = monitor.getItem()


        let targetCol = props

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

const Column2 = ({ row, connectDropTarget, isOver, isDragging }) => (
	<th style={{
			opacity: isOver ? 0.5 : 1,
			backgroundColor: isOver ? 'yellow' : 'inherit'
		}}>

		{
			connectDropTarget(
				<div className="col-lg-8">
					{row.zone} target2
				</div>
			)
		}
	</th>
)

export default DropTarget('row', headingTarget, collectDrop)(Column2)

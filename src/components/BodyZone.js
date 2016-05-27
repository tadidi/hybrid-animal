import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'

// DropTarget, it's a bodyZone who is an object
const zoneTarget = {
	drop(props, monitor) {
		let draggedAnimal = monitor.getItem()
        let targetZone = props

		// trigger drag action
		props.drag(draggedAnimal, targetZone)
	}
}

function collectDrop(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop()
	}
}

// Animal hybrid zone rendered in SVG
const BodyZone = ({ bodyZone, connectDropTarget, isOver, isDragging }) => (
	<div style={{
			opacity: isOver ? 0.5 : 1,
			backgroundColor: isOver ? 'yellow' : 'inherit'
		}}>
		{
			connectDropTarget(
				<div className="col-lg-8">
					{bodyZone.zone}
				</div>
			)
		}
	</div>
)

export default DropTarget('animal', zoneTarget, collectDrop)(BodyZone)

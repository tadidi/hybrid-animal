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
				<div>
					<svg width="150" height="150" viewBox="0 0 145 150" xmlns="http://www.w3.org/2000/svg">
						<title>{bodyZone.zone[0]}</title>
						<g stroke="#000" strokeWidth="3" fill="none" fill-rule="evenodd">
									<path d={bodyZone.zone[1]}/>
						</g>
					</svg>
				</div>
			)
		}
	</div>
)

export default DropTarget('animal', zoneTarget, collectDrop)(BodyZone)

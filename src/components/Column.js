import React, { Component as C} from 'react'
import { DragSource } from 'react-dnd'

const headingSource = {

	beginDrag(props) {
		return {
			column: props.column
		}
	}
}



function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}
}


const Column = ({ column, connectDragSource, isDragging }) => (
	<th>
		{
			connectDragSource(
				<div className="col-md-8">
					{column.name} source1
				</div>
			)
		}

	</th>
)

export default DragSource('row', headingSource, collect)(Column)

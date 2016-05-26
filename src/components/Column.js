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
	<div className="col-md-2">
		{
			connectDragSource(
                <div>
                    <svg width="80" height="100" viewBox="0 0 170 250" xmlns="http://www.w3.org/2000/svg">
                        <title>{column.name}</title>
                        <g stroke="#000" strokeWidth="3" fill="none" fill-rule="evenodd">
                            {column.icon.map((data) =>
                                    <path d={data} key={data}/>
                            )}
                        </g>
                    </svg>
                </div>
			)
		}

	</div>
)

export default DragSource('row', headingSource, collect)(Column)

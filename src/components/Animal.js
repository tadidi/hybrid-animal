import React, { Component as C} from 'react'
import { DragSource } from 'react-dnd'

// DragSource, one animal object with 5 keys
const animalsSource = {
	beginDrag(props) {
		return {
			animal: props.animal
		}
	}
}

function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}
}

// Animal icon component rendered in SVG
const Animal = ({animal, connectDragSource, isDragging}) => (
	<div className="col-xs-4">
		{
			connectDragSource(
                <div>
                    <svg className="animal" viewBox="-10 0 200 160" xmlns="http://www.w3.org/2000/svg">
                        <title>{animal.name}</title>
                        <g stroke="#000" strokeWidth="3" fill="none" fill-rule="evenodd">
                            {animal.icon.map((data) =>
                                    <path d={data} key={data.substr(0,7)}/>
                            )}
                        </g>
                    </svg>
                </div>
			)
		}

	</div>
)

export default DragSource('animal', animalsSource, collect)(Animal)

import React, { Component as C} from 'react'
import { DragSource } from 'react-dnd'
import { pipe } from 'ramda'

const animalSource = {
    beginDrag(props) {
        return {
            name: props.animal
        }
    }
}



function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}



const AnimalList = ({ animal, connectDragSource, isDragging }) => (
    <div>
        {
            connectDragSource(
                <div className="animal">
                    {animal.name}
                </div>
            )
        }
    </div>
)

export default pipe(DragSource('animal', animalSource, collect))(AnimalList)

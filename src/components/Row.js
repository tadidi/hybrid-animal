import React, { Proptypes, Component as C} from 'react'
import { DropTarget } from 'react-dnd'
import { pipe } from 'ramda'


const zoneTarget = {
    drop(props, monitor, component) {

        let draggedAnimal = monitor.getItem()
        let targetZone = component.props.row
        //trigger drag action
        props.drag(draggedAnimal, targetZone)

    }

}

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}

const Row = ({ row, connectDropTarget, isOver }) => (
    <div style={{
            opacity: isOver ? 0.5 : 1,
            backgroundColor: isOver ? 'yellow' : 'inherit'
        }}> {
        connectDropTarget(
        <div className="zone">
            {row.name}
        </div>
            )
        }
    </div>
)


export default pipe(DropTarget('row', zoneTarget, collect))(Row)





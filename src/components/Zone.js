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
class Zone extends Component {

    render() {

        const { bodyZone, connectDropTarget, isOver } =  this.props
        const style = {
            opacity: isOver ? 0.2 : 1,
            backgroundColor: isOver ? 'yellow' : 'inherit'
        }

        return connectDropTarget(
            <g style={style} fill-rule="evenodd">
                {bodyZone.zone[1].map((data) =>
                        <path d={data.path} fill={data.color} key={Math.random(0, 10000000)}/>
                )}
            </g>
        )
    }
}


export default DropTarget('animal', zoneTarget, collectDrop)(Zone)

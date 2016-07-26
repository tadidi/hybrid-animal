import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'

// DropTarget, it's a Zone, a SVG' <g>.
const zoneTarget = {
    drop(props, monitor) {
        let draggedAnimal = monitor.getItem();
        let targetZone = props;

        // trigger drag action
        props.drag(draggedAnimal, targetZone)
    }
};

function collectDrop(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    }
}

// Hybrid zone rendered inside <g>
class Zone extends Component {

    render() {
        const { bodyZone, connectDropTarget, isOver } =  this.props;
        const style = {
            opacity: isOver ? 0.2 : 1
        };
        return connectDropTarget(
            <g style={style}>
                {bodyZone.zone[1].map((data) =>
                        <path d={data.path} fill={data.color} key={Math.random(0, 10000000)}/>
                )}
            </g>
        )
    }
}

export default DropTarget('animal', zoneTarget, collectDrop)(Zone)

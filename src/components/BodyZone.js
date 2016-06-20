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
class BodyZone extends Component {

    render() {

        const { bodyZone, connectDropTarget, isOver } =  this.props
        const style = {
            opacity: isOver ? 0.5 : 1,
            backgroundColor: isOver ? 'yellow' : 'inherit'
        }

        return connectDropTarget(
            <div>
                <div style={style}>
                    <svg id={bodyZone.zone[0]} viewBox={bodyZone.zone[1]} xmlns="http://www.w3.org/2000/svg"
                         preserveAspectRatio="xMinYMin meet">
                        <title>{bodyZone.zone[0]}</title>
                        <g opacity="0.9" fill-rule="evenodd">
                            {bodyZone.zone[2].map((data) =>
                                    <path d={data} fill={bodyZone.zone[3][0]} key={data.substr(0,7)}/>
                            )}
                        </g>
                    </svg>
                </div>
            </div>
        )

    }
}


export default DropTarget('animal', zoneTarget, collectDrop)(BodyZone)

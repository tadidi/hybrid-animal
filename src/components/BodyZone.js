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
            backgroundColor: isOver ? 'grey' : 'inherit'
        }

        return connectDropTarget(
            <div>
                <div style={style}>
                    <svg className="animal--part" id={bodyZone.zone[0]} viewBox={bodyZone.zone[1]}
                         preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                        <title>{bodyZone.zone[0]}</title>
                        <g fill-rule="evenodd">
                            {bodyZone.zone[2].map((data) =>
                                    <path d={data.path} fill={data.color} key={Math.random(0, 10000000)}/>
                            )}
                        </g>
                    </svg>
                </div>
            </div>
        )

    }
}


export default DropTarget('animal', zoneTarget, collectDrop)(BodyZone)

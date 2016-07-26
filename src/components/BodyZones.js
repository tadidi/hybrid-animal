import React, { Component } from 'react'
import Zone from "./Zone.js"

// Animal hybrid rendered in one SVG
class BodyZones extends Component {
    render() {
        const { bodyZone, drag } =  this.props;
        return (
            <div className="animal__parts">
                <svg width="100%" id={bodyZone[0].zone[0]} viewBox="0 0 480 682"
                     preserveAspectRatio="xMidYMidmeet"
                     xmlns="http://www.w3.org/2000/svg">
                    <Zone key={bodyZone[2].zone[0]} bodyZone={bodyZone[2]} drag={drag}/>
                    <Zone key={bodyZone[1].zone[0]} bodyZone={bodyZone[1]} drag={drag}/>
                    <Zone key={bodyZone[0].zone[0]} bodyZone={bodyZone[0]} drag={drag}/>
                </svg>
            </div>
        )
    }
}

export default BodyZones

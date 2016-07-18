import React, { Component } from 'react'

// Animal name rendered by h1
class Footer extends Component {
    render() {
        const { bodyZone } =  this.props
        return (
            <div className="game__name text-lg-center text-xs-center" >
                {/* Hybrid name part */}
                <h1 className="hybrid__name" style={{color: bodyZone[0].zone[3]}}>{bodyZone[0].zone[2]}</h1>

                <h1 className="hybrid__name" style={{color: bodyZone[1].zone[3]}}>{bodyZone[1].zone[2]}</h1>

                <h1 className="hybrid__name" style={{color: bodyZone[2].zone[3]}}>{bodyZone[2].zone[2]}</h1>
            </div>
        )
    }
}

export default Footer

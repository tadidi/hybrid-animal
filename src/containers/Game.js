import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as DragActions from '../actions/actions'

import MultiBackend from '../react-dnd-multi-backend/MultiBackend.js'
import TouchBackend from 'react-dnd-touch-pointer-events-backend'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

import Animal from '../components/Animal'
import BodyZone from '../components/BodyZone'
import Footer from "../components/Footer.js"

const Game = ({game, actions}) => (
    <div className="game">
        <div className="game--content">
            {/* Animals icons */}
            <div className="game__animal">

                    <h3 className="text-lg-center text-xs-center">Glisser</h3>
                <div className="animal-list">
                    {game.animals.map((animal) => <Animal key={animal.name} animal={animal} drag={actions.drag}/>)}
                </div>
            </div>

            {/* Hybrid */}
            <div className="game__hybrid">
                <h3 className="text-lg-center text-xs-center">et Deposer ici</h3>
                <BodyZone bodyZone={game.zones} drag={actions.drag}/>
            </div>
        </div>
        <Footer bodyZone={game.zones}/>
    </div>
)


function mapStateToProps(state) {
    return {game: state.game}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(DragActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragDropContext(MultiBackend(HTML5Backend, TouchBackend))(Game))

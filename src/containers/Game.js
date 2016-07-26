import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as DragActions from '../actions/actions'

// MultiBackend to support both HTML5Backend and TouchBackend
import MultiBackend from '../react-dnd-multi-backend/MultiBackend.js'
// Backend for devices who need touch support
import TouchBackend from 'react-dnd-touch-pointer-events-backend'
// Backend for desktop
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

// React components
import Animal from '../components/Animal'
import BodyZones from '../components/BodyZones'
import Footer from "../components/Footer.js"
import ItemPreview from '../components/ItemPreview.js';

const Game = ({game, actions}) => (
    <div className="game">
        <div className="game--content">
            {/* Animals icons */}
            <div className="game__animal">
                <h3 className="text-lg-center text-xs-center">Glisser</h3>
                <div className="animal-list">
                    {/* Use of map to generate as many <Animal> (Icon) as there is in the reducer(State) */}
                    {game.animals.map((animal) => <Animal key={animal.name} animal={animal} drag={actions.drag}/>)}
                </div>
            </div>

            {/* Hybrid */}
            <div className="game__hybrid">
                <h3 className="text-lg-center text-xs-center">et Deposer ici</h3>
                <BodyZones bodyZone={game.zones} drag={actions.drag}/>
            </div>
        </div>
        {/* Hybrid Name create according to the user's drops */}
        <Footer bodyZone={game.zones}/>
        {/* Drag preview component recreate, because of the device and mobile lack */}
        <ItemPreview key={game.animals.name} {...game} />
    </div>
);

function mapStateToProps(state) {
    return {game: state.game}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(DragActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragDropContext(MultiBackend(HTML5Backend, TouchBackend))(Game))

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import Animal from '../components/Animal'
import BodyZone from '../components/BodyZone'
import * as DragActions from '../actions/actions'

const Game = ({ game, actions }) => (
    <div>
        <div className="col-md-6">
            <h1>ANIMALS</h1>
            { game.animals.map((animal) => <Animal key={animal.name} animal={animal} drag={actions.drag}/>) }
        </div>

        <div className="col-md-6">
            <h1>HYBRID</h1>
            { game.zones.map((bodyZone) => <BodyZone key={bodyZone.zone} bodyZone={bodyZone} drag={actions.drag}/>) }
        </div>
    </div>
)

function mapStateToProps(state) {
    return {
        game: state.game
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(DragActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DragDropContext(HTML5Backend)(Game))
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import AnimalList from '../components/animal-list'
import Row from '../components/Row'
import * as DragActions from '../actions/actions'

const Game = ({ game, actions }) => (
    <div>
        <div className="col-lg-4">
            { game.animals.map((animal) => <AnimalList key={animal.name}
                                                       animal={animal}
                                                       drag={actions.drag} />) }
        </div>

        <div className="col-lg-8">
            { game.rows.map((row) => <Row key={row.name}
                                          row={row}
                                          drag={actions.drag} />) }
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

export default connect(mapStateToProps, mapDispatchToProps)(DragDropContext(HTML5Backend)(Game))
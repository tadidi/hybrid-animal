import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import Animal from '../components/Animal'
import BodyZone from '../components/BodyZone'
import * as DragActions from '../actions/actions'


const Game = ({game, actions}) => (
    <div className="game">
        <div className="game--content">
            <div className="game__animal">
                {/* Animals icons */}
                <div className="">
                    <h3 className="text-lg-center">Glisser</h3>
                    {game.animals.map((animal) => <Animal key={animal.name} animal={animal} drag={actions.drag}/>)}
                </div>
            </div>

            {/* Hybrid */}
            <div className="game__hybrid">
                <h3 className="text-lg-center">Déposer ici</h3>
                    <BodyZone bodyZone={game.zones} drag={actions.drag}/>
            </div>
        </div>
        <footer className="game__name text-lg-center">
            {/* Hybrid name part */}
                <h1 className="hybrid__name">{game.zones[0].zone[2]}</h1>
                <h1 className="hybrid__name">{game.zones[1].zone[2]}</h1>
                <h1 className="hybrid__name">{game.zones[2].zone[2]}</h1>
        </footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(DragDropContext(HTML5Backend)(Game))

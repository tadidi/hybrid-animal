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
                {/* Head */}
                <div className="head">
                    <BodyZone key={game.zones[0].zone[0]} bodyZone={game.zones[0]} drag={actions.drag}/>
                </div>
                {/* Legs */}
                <div className="legs">
                    <BodyZone key={game.zones[2].zone[0]} bodyZone={game.zones[2]} drag={actions.drag}/>
                    {/* Body */}
                    <div className="body">
                        <BodyZone key={game.zones[1].zone[0]} bodyZone={game.zones[1]} drag={actions.drag}/>
                    </div>
                </div>
            </div>
        </div>
        <footer className="game__name">
            {/* Hybrid name part */}

                <h1 className="hybrid__name">{game.zones[0].zone[3]}</h1>

                <h1 className="hybrid__name">{game.zones[1].zone[3]}</h1>

                <h1 className="hybrid__name">{game.zones[2].zone[3]}</h1>

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

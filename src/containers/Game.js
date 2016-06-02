import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import Animal from '../components/Animal'
import BodyZone from '../components/BodyZone'
import * as DragActions from '../actions/actions'


const Game = ({game, actions}) => (
    <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h1>ANIMALS</h1>
            {game.animals.map((animal) => <Animal key={animal.name} animal={animal} drag={actions.drag}/>)}
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 hybrid">
            <h1>HYBRID</h1>
            <div className="head">
                <BodyZone key={game.zones[0].zone[0]} bodyZone={game.zones[0]} drag={actions.drag}/>
            </div>

            <div className="body">
                <BodyZone key={game.zones[1].zone[0]} bodyZone={game.zones[1]} drag={actions.drag}/>
            </div>

            <div className="legs">
                <BodyZone key={game.zones[2].zone[0]} bodyZone={game.zones[2]} drag={actions.drag}/>
            </div>
        </div>
    </div>
)

var headStyle = {
    position: "absolute",
}

var bodyStyle = {
    position: "absolute",
    top: 198,
    left: 170,
    zIndex: 300
}

var legsStyle = {
    position: "absolute",
    top: 198
}

function mapStateToProps(state) {return {game: state.game}}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(DragActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragDropContext(HTML5Backend)(Game))

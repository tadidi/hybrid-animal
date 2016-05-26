import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import Column from '../components/Column'
import Column2 from '../components/Column2'
import * as DragActions from '../actions/actions'

const Table = ({ table, actions }) => (
    <div>

        <div className="col-md-6">
            <h1>ANIMALS</h1>
            { table.headings.map((column) => <Column key={column.name} column={column} drag={actions.drag}/>) }
        </div>

        <div className="col-md-6">
            <h1>HYBRID</h1>
            { table.rows.map((row) => <Column2 key={row.zone} row={row} drag={actions.drag}/>) }
        </div>
    </div>
)

function mapStateToProps(state) {
    return {
        table: state.table
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
)(DragDropContext(HTML5Backend)(Table))

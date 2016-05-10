import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeadZone extends Component {
    render() {
        if (!this.props.animal) {
            return <div> Select an animal to get started. </div>
        }

        return (
            <h1>{this.props.animal.head}</h1>
        );
    }
}

function mapStateToProps(state) {
    return {
        animal: state.chosenAnimal
    };
}

export default connect(mapStateToProps)(HeadZone);
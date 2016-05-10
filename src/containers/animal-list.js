import React, { Component } from 'react';
import { connect } from 'react-redux';

// Container who had to be aware of the state, so it is connected to redux
class AnimalList extends Component {
    renderList() {
        return this.props.animals.map((animal) => {
            return (
                <li key={animal.name} className="list-group-item">{animal.name}</li>
            );
        });
    }

    render() {
        return (
            <div>
                <h1>ANIMALS</h1>
                <ul className="list-group col-sm-4">
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}


//Whatever is returned will show up as props inside AnimalList
function mapStateToProps(state) {
    return {
      animals: state.animals
    };
}

// Hook up the component to the function
export default connect(mapStateToProps)(AnimalList);
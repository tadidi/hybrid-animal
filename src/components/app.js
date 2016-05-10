import React from 'react';
import { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import AnimalList from '../containers/animal-list';
import HeadZone from '../containers/head-zone';

class App extends Component {
  render() {
    return (
        <div>
          <AnimalList />
          <HeadZone />
        </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
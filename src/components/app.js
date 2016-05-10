import React from 'react';
import { Component } from 'react';

import AnimalList from '../containers/animal-list';


export default class App extends Component {
  render() {
    return (
        <div>
          <AnimalList />
        </div>
    );
  }
}

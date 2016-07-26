import 'babel-polyfill'
/* React */
import React from 'react'
import ReactDOM from 'react-dom'
/* Redux */
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers/reducers'
import Game from './containers/Game'

let store = createStore(reducer);

const App = () => (
    <div>
        <Provider store={store}>
            <div>
                <Game />
            </div>
        </Provider>
    </div>
);

ReactDOM.render(<App />, document.querySelector('.wrapper'));


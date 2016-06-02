import 'babel-polyfill'
import Game from './containers/Game'
import main from './stylesheets/main.scss'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { persistState, createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import reducer from './reducers/reducers'

import React from 'react'
import ReactDOM from 'react-dom'





let store = createStore(reducer)

const App = () => (
    <div>
        <Provider store={store}>
            <div>
                <Game />
            </div>
        </Provider>
    </div>
)


ReactDOM.render(<App />, document.querySelector('.container'))


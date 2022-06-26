import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import Parameters from './Parameters';

import { Provider } from 'react-redux'
import {createStore} from "redux";

function counterReducer(state = { volume: 0 }, action) {
    switch (action.type) {
        case 'volume':
            return { volume: state.volume }
        default:
            return state
    }
}
let store = createStore(counterReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Parameters/>
        </Provider>


    </React.StrictMode>
);


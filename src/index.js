import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux'
import {createStore} from "redux";

function counterReducer(state = { volume: 0 }, action) {
    switch (action.type) {
        case 'GET_VOLUME':
            return state.volume
        case 'SET_VOLUME':
            state = {
                ...state,
                volume: action.payload
            }
            return state

            case 'GET_MASS':
                return state.mass
            case 'SET_MASS':
                state = {
                    ...state,
                    mass: action.payload
                }
            return state

            case 'GET_MASS_ALL':
                return state.massAll
            case 'SET_MASS_ALL':
                state = {
                    ...state,
                    massAll: action.payload
            }
            return state

            case 'GET_LENGTH':
                return state.length
            case 'SET_LENGTH':
                state = {
                    ...state,
                    length: action.payload
            }
            return state

            case 'GET_WIDTH':
                return state.width
            case 'SET_WIDTH':
                state = {
                    ...state,
                    width: action.payload
            }
            return state

            case 'GET_HEIGHT':
                return state.height
            case 'SET_HEIGHT':
                state = {
                    ...state,
                    height: action.payload
            }
            return state

            case 'GET_DENSITY':
                return state.density
            case 'SET_DENSITY':
                state = {
                    ...state,
                    density: action.payload
            }
            return state

            default:
                return state
    }
}
let store = createStore(counterReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>


    </React.StrictMode>
);


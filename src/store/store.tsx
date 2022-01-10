import {createStore, compose} from '@reduxjs/toolkit'
import rootReducer from '../reducers'
import logger from 'redux-logger'

const initialState = {
    veterinari: [],
    visibilityFilter: 'NOT_SHOWED',
    search: {}
}

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, {...initialState}, composeEnhancers())

export default store
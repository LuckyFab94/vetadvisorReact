import store from '../store/store'
import {SEARCH, CLOSE_SEARCH} from '../types/action'

export const search = (search: {}) =>{
    store.dispatch({
        type: SEARCH,
        payload: search
    })
}

export const closeSearch = () => {
    store.dispatch({
        type: CLOSE_SEARCH
    })
}
import { CLOSE_SEARCH, SEARCH } from "../types/action"

export default function reducer (state= {}, action: any){
    switch(action.type){
        case SEARCH:
            return {
                ...state,
                visibilityFilter: 'SHOWED',
                search: action.payload
            }
        case CLOSE_SEARCH:
            return {
                ...state,
                visibilityFilter: 'NOT_SHOWED'
            }
        default:
            return state
    }
}
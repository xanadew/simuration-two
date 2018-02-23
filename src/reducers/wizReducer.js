import initialState from './initialState';
import {WRITE_WIZ_ONE,WRITE_WIZ_TWO,
    WRITE_WIZ_THREE,WRITE_WIZ_FOUR,
    WRITE_WIZ_FIVE,WRITE_MG_FIELD,
    WRITE_LOAN_FIELD,RESET_STORE} from '../actions/actionTypes';

export default function wizzy(state=initialState,action){
    let newState;
    switch(action.type){
        case WRITE_WIZ_ONE:
            return Object.assign({},state,action.payload)
        case WRITE_WIZ_TWO:
            return Object.assign({},state,action.payload)
        case WRITE_WIZ_THREE:
            return Object.assign({},state,action.payload)
        case WRITE_WIZ_FOUR:
            return Object.assign({},state,action.payload)
        case WRITE_WIZ_FIVE:
            return Object.assign({},state,action.payload)
        case WRITE_MG_FIELD:
            return Object.assign({},state,action.payload)
        case WRITE_LOAN_FIELD:
            return Object.assign({},state,action.payload)
        case RESET_STORE:
            return Object.assign({},state,initialState)
    default: return state;
    }
}

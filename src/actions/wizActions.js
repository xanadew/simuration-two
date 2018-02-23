import {WRITE_WIZ_ONE,WRITE_WIZ_TWO,
    WRITE_WIZ_THREE,WRITE_WIZ_FOUR,
    WRITE_WIZ_FIVE,WRITE_MG_FIELD,
    WRITE_LOAN_FIELD,RESET_STORE} from './actionTypes';

export function saveWiz1(data){
    return{
        type:WRITE_WIZ_ONE,
        payload:data
    }
}
export function saveWiz2(data){
    return{
        type:WRITE_WIZ_TWO,
        payload:data
    }
}
export function saveWiz3(data){
    return{
        type:WRITE_WIZ_THREE,
        payload:data
    }
}
export function saveWiz4(data){
    return{
        type:WRITE_WIZ_FOUR,
        payload:data
    }
}
export function saveWiz5(data){
    return{
        type:WRITE_WIZ_FIVE,
        payload:data
    }
}
export function writeMgField(data){
    return{
        type:WRITE_MG_FIELD,
        payload:data
    }
}
export function writeLoanField(data){
    return{
        type:WRITE_LOAN_FIELD,
        payload:data
    }
}
export function resetStore(data){
    return{
        type:RESET_STORE,
        payload:data
    }
}
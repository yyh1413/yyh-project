import * as actions from './action-types'

export const msgReducer = (state = {}, action:any) => {
    const {msg, msgType} = action;
    switch (action.type) {
        case actions.ERR_SET_MSG:
            return {...state , msg:msg, msgType:msgType};
        case actions.ERR_CLEAR_MSG:
            return {...state , msg:undefined, msgType:undefined};
        default:
            return state;
    }
};
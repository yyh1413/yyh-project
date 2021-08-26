import * as actions from './action-types'

export const menuReducer = (state = initState, action: any) => {
    const { payload } = action;
    switch (action.type) {
        case actions.HOME_MENU:
            return { ...state, ...payload };
        case actions.HOME_MENU_ERROR:
            return { ...state, msg: payload };
        default:
            return state;
    }
};

export const homeReducer = (state = initState, action: any) => {
    const { payload } = action;
    switch (action.type) {
        case actions.HOME_DATA:
            return { ...state, data: payload, msg: undefined };
        case actions.HOME_DATA_ERROR:
            return { ...state, data: undefined, msg: payload };
        default:
            return state;
    }
};

const initState = {};
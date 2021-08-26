import * as actions from './action-types'

const initState = {};

export default (state=initState, action:any) => {
    const { payload } = action;
    switch (action.type) {
        case actions.LOGIN_SUCCESS:
            const { auths, roleName, authID,userId, userName } = payload;
            return {...state,
                userId:userId,
                userName:userName,
                roleName:roleName,
                auths:auths,
                state:true,
                logining:false,
                authID: authID
            };
        default:
            return state;
    }
};

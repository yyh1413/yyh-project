import * as actions from './action-types'

export const loginSuccess = (useName = '张三') => {
    console.log('loginSuccess', useName)
    return {
        type: actions.LOGIN_SUCCESS,
        payload: {auths: 'yes', roleName: '业务员', authID: 'erty9dw9ca8fq9wf198qf199', userId: "48919", userName: useName}
    }
};

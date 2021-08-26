import * as actions from './action-types'

/** 提示信息类型枚举 */
export enum MsgType {
    success="success", info="info", warn="warn", error="error"
}

/** 设置全局提示信息，msg：提示信息，msgType：提示信息类型 */
export const setMsgAction = (msg: string, msgType:MsgType) => ({
    type:actions.ERR_SET_MSG,
    msg:msg,
    msgType:msgType
});

/** 清除全局提示信息 */
export const clearMsgAction = () => ({
    type:actions.ERR_CLEAR_MSG,
    msg:undefined,
    msgType:undefined
});
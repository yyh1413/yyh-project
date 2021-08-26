import { AxiosResponse } from 'axios'
import { Modal } from 'antd';
import * as CommonUtils from '../commonUtils/CommonUtils'

export interface IAction{
    promise: Promise<AxiosResponse<any>>,   // ajax请求promise
    onSuccess?: (data: any) => void,        // 当result.state为true时回调，参数为result.data
    onFail?: (msg: string) => void,         // 当result.state为false时回调，参数为result.msg
    onError?: (e: any) => void,             // 当ajax请求异常时回调，参数为异常
    onFinally?: () => void,                 // 最终回调，无参数
    successMsg?: string,                    // 当result.state为true时未设置回调，提示消息
    failMsg?: string                        // 当result.state为false时未设置回调，提示消息
}

/**
 * Ajax请求工具类
 */
export default class AjaxCommonUtils {

    /**
     * 发送Ajax请求
     * @param action
     */
    public static async send(action: IAction){
        try{
            const response = await action.promise;
            const result = response.data;
            if (result.state) {
                if (action.onSuccess) {
                    action.onSuccess(result.data);
                } else {
                    Modal.success({
                        title: '成功',
                        content: CommonUtils.getValueDefault(action.successMsg, result.msg),
                    });
                }
            } else {
                if (action.onFail) {
                    action.onFail(result.msg);
                } else {
                    Modal.error({
                        title: '失败',
                        content: `${action.failMsg ? action.failMsg : ""}${result.msg}`,
                    });
                }
            }
        } catch(e){
            if(action.onError){
                action.onError(e);
            }else{
                console.error(e);
                Modal.error({
                    title: '异常',
                    content: e,
                });
            }
        } finally{
            if (action.onFinally) {
                action.onFinally();
            }
        }
    }
}

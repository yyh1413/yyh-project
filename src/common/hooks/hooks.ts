import {useCallback, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {Modal} from "antd";
import {MsgType, setMsgAction} from "../../pages/err/redux/actions";

type target = { target: { name: string, value: string } };
/*
功能：Form 表单双向绑定
用法：
const [form, handleChange] = useForm({useName: ''})
<input type="text" name={'useName'} value={form.useName} onChange={handleChange}/>
*/
const useForm = <T>(initValue: T): [T, (e: target) => void] => {
    const [form, setForm] = useState(initValue);
    const handleChange = (event: target) => setForm({...form, [event.target.name]: event.target.value})
    return [form, handleChange]
}

/*AXIOS 配置参数接口类型*/
export interface IAxiosParam {
    url: string,// 请求URL
    method?: 'get' | 'GET' | 'post' | 'POST' | undefined,  // 请求方式
    requestParam?: {},// 请求参数
    authID: string,// 请求authID
    type?: | 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream',// 请求返回类型
    dispatch?: any,// dispatch
    successDispose?: boolean,// 处理  请求成功需不需要默认处理方法
    errorDispose?: boolean,// 处理  请求错误需不需要默认处理方法
}

/* 功能：AXIOS 请求
* data 配置参数
* successCallback 请求成功回调方法
* errCallback 请求失败回调方法
* */
const useAxios = (data: IAxiosParam, successCallback?: <T = any> (response: T) => any, errCallback?: <T = any> (param?: T) => any) => {
    const [state, setState] = useState({loading: false, data: {}});
    const send = useCallback(() => {
        setState({...state, loading: true})
        // 配置参数初始化
        const [url, method, requestParam, config, dispatch] = [data.url, data.method, data.requestParam, {
            responseType: data.type || 'json',
            headers: {
                authorization: data.authID
            }
        }, data?.dispatch];
        const getAxiosType = async (): Promise<AxiosResponse> => {
            if (method === 'get' || method === 'GET') { // axios   get方法
                return await axios.get(url, config)
            } else {    // axios   post方法
                return await axios.post(url, requestParam, config)
            }
        };
        getAxiosType().then((response) => thenFunction(response)).catch((e) => catchFunction(e));
        const thenFunction = (response: { data: any; }) => { // 请求成功方法
            if (!data.successDispose) {
                const result = response.data;
                if (result.state) {
                    successCallback?.(response?.data)
                } else {
                    if (dispatch) {
                        dispatch?.(setMsgAction(response.data.msg, MsgType.error))
                    } else {
                        Modal.error({
                            title: '错误',
                            content: response.data.msg,
                        });
                    }
                }
            } else {
                successCallback?.(response)
            }
            setState({data: response.data, loading: false})
        };
        const catchFunction = (e: any) => {   // 请求失败方法
            if (!data.errorDispose) {
                if (dispatch) {
                    dispatch?.(setMsgAction('系统异常,请联系管理员', MsgType.error));
                } else {
                    Modal.error({
                        title: '错误',
                        content: '系统异常,请联系管理员',
                    });
                }
                errCallback?.(e);
            } else {
                errCallback?.(e);
            }
            setState({...state, loading: false})
        };
    }, [data])
    return {state, send}
}

export {useForm, useAxios}

import * as actions from './action-types'
import axios from 'axios'
// import * as urls from "../../URLS"
import { MsgType, setMsgAction } from "../../err/redux/actions";

const getMenu = (data: any) => ({
    type: actions.HOME_MENU,
    payload: data
});

const getHomeData = (data: any) => ({
    type: actions.HOME_DATA,
    payload: data
});

export const getMenuAction = (authID: string) => {
    return (dispatch: any) => {
        // axios.get(urls.getMenuUrl, {
        //     responseType: 'json',
        //     headers: {
        //         authorization: authID
        //     }
        // }).then((response) => {
        //     const result = response.data;
        //     if (result.state) {
        //         dispatch(getMenu(result.data));
        //     } else {
        //         dispatch(setMsgAction(result.msg, MsgType.error));
        //     }
        // }).catch(() => {
        //     dispatch(setMsgAction("菜单获取失败", MsgType.error));
        // });
    }
};


export const getMainDataAction = (authID: string) => {
    return (dispatch: any) => {
        // axios.get(urls.mainSearchAllCountDataUrl, {
        //     responseType: 'json',
        //     headers: {
        //         authorization: authID
        //     }
        // }).then((response) => {
        //     const result = response.data;
        //     if (result.state) {
        //         dispatch(getHomeData(result.data));
        //     } else {
        //         dispatch(setMsgAction(result.msg, MsgType.error));
        //     }
        // }).catch(() => {
        //     dispatch(setMsgAction("主页数据获取失败", MsgType.error));
        // });
    }
};

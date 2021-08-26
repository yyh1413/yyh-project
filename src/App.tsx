import React from 'react';
import {Provider} from 'react-redux'
import {store, persistor} from './store/store'
import {PersistGate} from 'redux-persist/integration/react'
import {ConfigProvider, message} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from "moment"
import Router from './routes/Routes'

export default function App() {
    moment.locale('zh-cn');
    message.config({
        top: 300,
        duration: 2,
        maxCount: 3,
    });
    return (
        <ConfigProvider locale={zhCN}>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Router/>
                </PersistGate>
            </Provider>
        </ConfigProvider>
    );
}

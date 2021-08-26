import React, {useState} from "react";
import {Form, Input, Button} from 'antd';
import {Redirect} from "react-router-dom";
import {useDispatch} from "react-redux";
import * as action from './redux/actions';

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 8},
};
const tailLayout = {
    wrapperCol: {offset: 0, span: 6},
};
const Login: React.FC = () => {
    const dispatch = useDispatch()
    const [login, setLogin] = useState(false)
    const onFinish = (values: any) => {
        sessionStorage.setItem('login', String(true))
        if (values.username === 'TDC0199999Yangyuhao' && values.password === 'Yangyuhao') {
            dispatch(action.loginSuccess('郭小洋'))
            setLogin(true)
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    if (login) {
        return (<Redirect to="/"/>)
    }
    return (
        <Form  {...layout} name="basic" initialValues={{remember: true}}
               onFinish={onFinish} onFinishFailed={onFinishFailed}
        >
            <Form.Item
                {...tailLayout}
                label="Username"
                name="username"
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                {...tailLayout}
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default Login;

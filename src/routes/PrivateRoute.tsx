import React from "react"
import {Route} from "react-router-dom"

interface IProps {
    component: any
    path: string
    exact?: any
    login?: any
}

/** 受保护的路径 */
const PrivateRoute = (props: IProps) => {
    const {component: Component, ...rest} = props;
    return (
        <Route {...rest}
               render={
                   props => {
                       const loginState = sessionStorage.getItem('login')
                       if (!loginState) {// 判断登录状态
                           return (<Component {...props} />);
                       } else {
                           window.location.href = '/login';

                       }
                   }
               }
        />
    )
}
export default PrivateRoute;
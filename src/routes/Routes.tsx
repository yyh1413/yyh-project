import React, {Suspense, lazy} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ErrPage from "../pages/err";
import PrivateRoute from "./PrivateRoute";

const Main = lazy(() => import('../pages/main/Main'))
const Login = lazy(() => import('../pages/login/Login'))
export default () => {
    return (
        <Router>
            <Suspense fallback={<span/>}>
                <Switch>
                    <Route path='/err' component={ErrPage}/>
                    <Route path='/login' component={Login}/>
                    <PrivateRoute path='/' component={Main}/>
                </Switch>
            </Suspense>
        </Router>
    )
}

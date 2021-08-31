import React, {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ErrPage from "../pages/err";
import PrivateRoute from "./PrivateRoute";

const Main = lazy(() => import('../pages/main/Main'))
const Login = lazy(() => import('../pages/login/Login'))
const Resume = lazy(() => import('../pages/works/resume/resume'))
export default () => {
  return (
    <Router>
      <Suspense fallback={<span/>}>
        <Switch>
          <Route exact={true} path='/err' component={ErrPage}/>
          <Route exact={true} path='/login' component={Login}/>
          <PrivateRoute exact={true} path='/resume' component={Resume}/>
          <PrivateRoute path='/' component={Main}/>
        </Switch>
      </Suspense>
    </Router>
  )
}

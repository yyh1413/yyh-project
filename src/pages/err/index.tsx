import * as React from 'react'
import {Route, Switch} from "react-router";

import Err403 from "./components/Err403"
import Err404 from "./components/Err404"
import Err500 from "./components/Err500"

class ErrPage extends React.Component{
    public render() {
        return(
            <div>
                <Switch>
                    <Route path='/err/404' component={ Err404 }/>
                    <Route path='/err/403' component={ Err403 }/>
                    <Route path='/err/500' component={ Err500 }/>
                </Switch>
            </div>
        )
    }
}

export default ErrPage
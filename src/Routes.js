/* */
import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

/* */
import Home from './container/Home'
import App from './container/App'
import SignUp from './container/SignUp'
import SignIn from './container/SignIn'


export default () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/editor" component={App} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/signIn" component={SignIn} />
        </Switch>
    </HashRouter>
)

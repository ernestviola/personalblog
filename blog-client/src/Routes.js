import React from 'react';

import { Route, Switch } from 'react-router-dom';
import AppliedRoute from "./components/AppliedRoute";

//Routes
import Home from './containers/Home';
import BlogHome from './containers/BlogHome';
import Projects from './containers/Projects';
import Login from './containers/Login';
import NotFound from './containers/NotFound';

export default ({ childProps }) =>
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps} />
        <AppliedRoute path="/login" exact component={Login} props={childProps} />
        <Route path="/blog" exact component={BlogHome} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/login" exact component={Login} />
        <Route component={NotFound} />
    </Switch>;
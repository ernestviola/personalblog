import React from 'react';

import { Route, Switch } from 'react-router-dom';

//Routes
import Home from './containers/Home';
import BlogHome from './containers/BlogHome';
import Projects from './containers/Projects';
import NotFound from './containers/NotFound';

export default () =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={BlogHome} />
        <Route path="/projects" exact component={Projects} />
        <Route component={NotFound} />
    </Switch>;
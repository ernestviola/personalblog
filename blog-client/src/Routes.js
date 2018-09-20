import React from 'react';

import { Route, Switch } from 'react-router-dom';

//Routes
import Home from './containers/Home';
import Blog from './containers/Blog';
import Projects from './containers/Projects';

export default () =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/projects" exact component={Projects} />

    </Switch>;
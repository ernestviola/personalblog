import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Home from './routes/Home';
import Blog from './routes/Blog';
import BlogPost from './routes/BlogPost'
import Projects from './routes/Projects';
import Navbar from './components/CustomNavbar';

const NoMatch = ({ location }) => (
  <div>
    <h3>404 error <code>{location.pathname}</code> does not exist</h3>
  </div>
)


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/blog/' component={Blog} />
            <Route exact path='/blog/:post' component={BlogPost} />
            <Route exact path='/projects' component={Projects} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

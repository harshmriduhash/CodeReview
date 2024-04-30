// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Login from './Login';
import Register from './Register';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

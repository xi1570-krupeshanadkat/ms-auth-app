import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Layout/Navbar'
import Dashboard from './Routes/Dashboard';
import Login from './Routes/Login';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import CustomerListView from './containers/CustomerListView';
import ContractListView from './containers/ContractListView';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/contracts">
            <Contracts />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};


function Home() {
  return (
    <div class="center-screen">
      <h1>The Contract Automation Platform</h1>
      <nav>
        <Link to="/contracts">Contracts</Link>
        <Link to="/customers">Customers</Link>
      </nav>
    </div>
  );
};

function Contracts() {
  return (
    <div>
      <h1>Contracts</h1>
      <ContractListView />
    </div>
  );
};

function Customers() {
  return (
    <div>
      <h1>Customers</h1>
      <CustomerListView />
    </div>
  );
};

export default App;

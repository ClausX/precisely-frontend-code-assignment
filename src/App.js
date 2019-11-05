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
            <ContractListView />;
          </Route>
          <Route path="/customers">
            <CustomerListView />;
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


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
}
export default App;

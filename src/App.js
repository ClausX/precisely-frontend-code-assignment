import React from 'react';
import './App.css';
import CustomerListView from './containers/CustomerListView';
import ContractListView from './containers/ContractListView';

function App() {
  return (
    <div className="App">
      <CustomerListView/>
      <ContractListView/>
    </div>
  );
}

export default App;

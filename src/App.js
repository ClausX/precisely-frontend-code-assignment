import React from 'react';
import './App.css';
import CustomerListItem from './components/CustomerListItem';
import CustomerList from './components/CustomerList';
import sampleCustomers from './sampleData/customers.json'

function App() {
  return (
    <div className="App">
      <CustomerListItem 
        name="Hej"/>
      <CustomerList customers={sampleCustomers}/>
    </div>
  );
}

export default App;

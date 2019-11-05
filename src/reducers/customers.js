import initialCustomers from '../sampleData/customers.json';

const customers = (state = initialCustomers, action) => {
    switch (action.type) {
      case 'DELETE_CUSTOMER':
        let newState = state.slice();
        newState = newState.filter((c) => { return c.id !== action.customerId});
        return newState;
      default:
        return state;
    }
  }
  
  export default customers
import initialContracts from '../sampleData/contracts.json';

const contracts = (state = initialContracts, action) => {
    switch (action.type) {
      case 'DELETE_CONTRACTS_OF_COSTUMERS':
        let newState = state.slice();
        newState = newState.filter((c) => { return c.customerId !== action.customerId});
        console.log(newState);
        return newState;
      default:
        return state;
    }
  }
  
  export default contracts
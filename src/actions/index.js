import * as types from '../constants/ActionTypes';

export const deleteCustomer = customerId => ({
    type: types.DELETE_CUSTOMER,
    customerId
});

export const deleteContractsOfCostumers = customerId => ({
    type: types.DELETE_CONTRACTS_OF_COSTUMERS,
    customerId
});
import * as types from '../constants/ActionTypes';

export const deleteCustomer = customerId => ({
  type: types.DELETE_CUSTOMER,
  customerId
});
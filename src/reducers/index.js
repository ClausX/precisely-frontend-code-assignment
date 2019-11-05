import { combineReducers } from 'redux';
import customers from './customers';
import contracts from './contracts';

export default combineReducers({
  customers,
  contracts,
})
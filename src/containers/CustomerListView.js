import { connect } from 'react-redux';
import { deleteCustomer, deleteContractsOfCostumers } from '../actions';
import CustomerList from '../components/CustomerList';

const getAllCustomers = (customers) => {
    return customers;
}

const mapStateToProps = state => ({
    customers: getAllCustomers(state.customers)
});

const mapDistpatchToProps = dispatch => ({
    onDeleteCustomerClick: id => {
        dispatch(deleteCustomer(id));
        dispatch(deleteContractsOfCostumers(id));
    }
});

export default connect(mapStateToProps, mapDistpatchToProps)(CustomerList);
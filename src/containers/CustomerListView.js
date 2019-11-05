import { connect } from 'react-redux';
import { deleteCustomer, deleteContractsOfCostumers } from '../actions';
import CustomerList from '../components/CustomerList';

const mapStateToProps = state => ({
    customers: state.customers,
    contracts: state.contracts
});

const mapDistpatchToProps = dispatch => ({
    onDeleteCustomerClick: id => {
        dispatch(deleteCustomer(id));
        dispatch(deleteContractsOfCostumers(id));
    }
});

export default connect(mapStateToProps, mapDistpatchToProps)(CustomerList);
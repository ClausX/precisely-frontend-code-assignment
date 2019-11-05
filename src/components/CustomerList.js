import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomerList = ({ customers, onDeleteCustomerClick, contracts }) => (
    <div class="grid-container">
        {customers.map(customer => 
            <CustomerListItem 
                key={customer.id} 
                customer={customer}
                contracts={contracts.filter((c) => {return c.customerId === customer.id})} 
                onDeleteCustomerClick={() => onDeleteCustomerClick(customer.id)}
                />
        )}
    </div>
);

CustomerList.propTypes = {
    customers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    contracts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            customerId: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default CustomerList;
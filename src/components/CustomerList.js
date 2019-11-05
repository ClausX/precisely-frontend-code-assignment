import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomerList = ({ customers, onDeleteCustomerClick }) => (
    <ul>
        {customers.map(customer => 
            <CustomerListItem 
                key={customer.id} 
                customer={customer} 
                onDeleteCustomerClick={() => onDeleteCustomerClick(customer.id)}
                />
        )}
    </ul>
);

CustomerList.propTypes = {
    customers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}

export default CustomerList;
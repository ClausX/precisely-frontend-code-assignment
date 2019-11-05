import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomerList = ({ customers }) => (
    <ul>
        {customers.map(customer => (
            <CustomerListItem key={customer.id} name={customer.name} onClick={() => alert("listaliastliast")}></CustomerListItem>
        ))}
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
import React from 'react';
import PropTypes from 'prop-types';

const CustomerListItem = ({customer, contracts, onDeleteCustomerClick}) => (
    <li>
        <div>
            this is a customer, {customer.name}
            <button onClick={onDeleteCustomerClick}>Delete customer</button>
        </div>
    </li>
)

CustomerListItem.propTypes = {
    onDeleteCustomerClick: PropTypes.func.isRequired,
    customer: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired,
    contracts: PropTypes.array
}

export default CustomerListItem;
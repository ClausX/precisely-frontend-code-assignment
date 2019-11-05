import React from 'react';
import PropTypes from 'prop-types';

const CustomerListItem = ({customer, contracts, onDeleteCustomerClick}) => (
    <div class="card grid-item">
        <h5>{customer.name}</h5>
        <button onClick={onDeleteCustomerClick}>Delete</button>
            {contracts.map(contract => 
                <div> {contract.name} </div>
            )}
    </div>
)

CustomerListItem.propTypes = {
    onDeleteCustomerClick: PropTypes.func.isRequired,
    customer: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired,
    contracts: PropTypes.array.isRequired
}

export default CustomerListItem;
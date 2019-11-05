import React from 'react';
import PropTypes from 'prop-types';

const CustomerListItem = ({ onClick, name, contracts}) => (
    <li 
        onClick={onClick}>
        this is a customer, {name}
    </li>
)

CustomerListItem.propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string.isRequired,
    contracts: PropTypes.array,
}

export default CustomerListItem;
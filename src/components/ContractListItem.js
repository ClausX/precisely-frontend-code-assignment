import React from 'react';
import PropTypes from 'prop-types';

const ContractListItem = ({contract}) => (
    <div class="card">
        <h4>{contract.name}</h4>
        <div>
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </div>
    </div>
)

ContractListItem.propTypes = {
    contract: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        customerId: PropTypes.string.isRequired
    }).isRequired
}

export default ContractListItem;
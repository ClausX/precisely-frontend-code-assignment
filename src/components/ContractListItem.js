import React from 'react';
import PropTypes from 'prop-types';

const ContractListItem = ({contract}) => (
    <li>
        <div>
            this is a contract, {contract.name}
        </div>
    </li>
)

ContractListItem.propTypes = {
    contract: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        customerId: PropTypes.string.isRequired
    }).isRequired
}

export default ContractListItem;
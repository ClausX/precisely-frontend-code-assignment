import React from 'react';
import PropTypes from 'prop-types';
import ContractListItem from './ContractListItem';

const ContractList = ({ contracts }) => (
    <div class="grid-container">
        {contracts.map(contract => 
            <ContractListItem 
                key={contract.id} 
                contract={contract}
                />
        )}
    </div>
);

ContractList.propTypes = {
    contracts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            customerId: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default ContractList;
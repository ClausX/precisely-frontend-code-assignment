import React from 'react';
import PropTypes from 'prop-types';
import ContractListItem from './ContractListItem';

const ContractList = ({ contracts }) => (
    <ul>
        {contracts.map(contract => 
            <ContractListItem 
                key={contract.id} 
                contract={contract}
                />
        )}
    </ul>
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
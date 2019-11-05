import { connect } from 'react-redux';
import ContractList from '../components/ContractList';

const getAllContracts = (contracts) => {
    return contracts;
}

const mapStateToProps = state => ({
    contracts: getAllContracts(state.contracts)
});

export default connect(mapStateToProps)(ContractList);
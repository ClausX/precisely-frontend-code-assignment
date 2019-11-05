import { connect } from 'react-redux';
import ContractList from '../components/ContractList';

const mapStateToProps = state => ({
    contracts: state.contracts
});

export default connect(mapStateToProps)(ContractList);
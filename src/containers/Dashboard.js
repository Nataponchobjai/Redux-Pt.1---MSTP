import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';

const mapStateToprops = (state) => {
    return {
        cars: state.cars,
        user: state.user
    };
};

export default connect(mapStateToprops)(Dashboard)
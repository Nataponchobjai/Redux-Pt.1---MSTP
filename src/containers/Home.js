import { connect } from 'react-redux';

import Home from '../components/Home';

const mapStateToprops = (state) => {
    return {
        cars: state.cars
    };
};

export default connect(mapStateToprops)(Home)
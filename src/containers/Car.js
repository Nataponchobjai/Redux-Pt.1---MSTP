import { connect } from 'react-redux';

import Car from '../components/Car';

const mapStateToprops = (state) => {
    return {
        cars: state.cars
    };
};

export default connect(mapStateToprops)(Car)
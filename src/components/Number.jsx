import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import numberContext from '../store/number/context.js';


function Number() {
    const {current, isLoading, refresh} = useContext(numberContext);

    return <div>
        <div>{isLoading ? 'loading' : ''}</div>
        <div>{current}</div>
        <button onClick={refresh}>refresh</button>
    </div>
}


export default Number;

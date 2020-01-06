import React, {useState} from 'react';

import numberContext from './context.js';
import initialState from './initialState.js';
import * as actions from './actions.js';


export default function NumberProvider({children}) {
    const [current, setCurrent] = useState(initialState.current);
    const [isLoading, setIsLoading] = useState(initialState.isLoading);

    const store = {
        current,
        isLoading,
        refresh: () => actions.fetchNumber(setCurrent, setIsLoading),
        increment: () => actions.increment(setCurrent)
    };

    return <numberContext.Provider value={store}>
        {children}
    </numberContext.Provider>;
};

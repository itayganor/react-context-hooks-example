import {createContext} from 'react';
import initialState from './initialState.js';


const numberContext = createContext(initialState);

export default numberContext;

import React from 'react';
import logo from './logo.svg';
import './App.css';

import NumberProvider from './store/number/provider.js';
import Number from './components/Number.jsx';

function App() {
    return (
        <NumberProvider>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Number/>
                </header>
            </div>
        </NumberProvider>
    );
}

export default App;

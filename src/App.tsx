import React from 'react';
import './App.css';
import UnionComponent from './components/UnionComponent';
import Provider from './context/Provider';


function App() {
    return (
        <React.Fragment>
            <Provider>
                <UnionComponent />
            </Provider>
        </React.Fragment>
    );
}

export default App;

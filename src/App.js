import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './Reducer';

// Custom Imports
import Header from './components/util/Header';
import Main from './components/util/Main';
import Footer from './components/util/Footer';


// initiate redux store
const store = createStore( Reducer );

const App = () => {

  return (
    <Provider store={ store }>
      <Router>
        <div className="App">
          <Header />
          
          <Main />
          
          <Footer />

        </div>
      </Router>
    </Provider>
  );
}

export default App;

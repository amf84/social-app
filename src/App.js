import React from 'react';
import './App.css';
import { AppRouter } from './App/AppRouter';
import { Provider  } from 'react-redux';
import { Store  } from './Redux/Store';

function App() {
  return (
    <div>
    <Provider store={Store}>
      <AppRouter />
    </Provider>
    </div>
  );
}

export default App;

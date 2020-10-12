import React from 'react';
import './App.css';
import { AppRouter } from './App/AppRouter';
import { Provider  } from 'react-redux';
import { Store  } from './Redux/Store';

function App() {
  return (
    <body>
    <Provider store={Store}>
      <AppRouter />
    </Provider>
    </body>
  );
}

export default App;

import React from 'react';
import RootRouter from './routers/RootRouter';
import { createStore } from 'redux';
import rootReducer from './store';
import { Provider } from 'react-redux';


const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RootRouter />
      </div>
    </Provider>
  );
}

export default App;

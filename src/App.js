import React, { Component } from 'react';
import './assets/scss/style.scss';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import AppContainer from './containers/AppContainer';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk
    )
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;

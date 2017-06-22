import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import createStore from './createStore';

class Main extends React.Component {

  render() {
    const store = createStore();
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Main;

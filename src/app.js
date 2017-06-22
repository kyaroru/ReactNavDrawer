import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './components/login';
import Drawer from './components/drawer';

const createStackNavigator = currentUser => StackNavigator({
  LoginScreen: { screen: LoginScreen },
  Drawer: { screen: Drawer },
}, {
  initialRouteName: isEmpty(currentUser) ? 'LoginScreen' : 'Drawer',
});

class App extends Component {
  render() {
    const { currentUser } = this.props;
    const Navigator = createStackNavigator(currentUser);
    return (
      <Navigator />
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

const mapStateToProps = store => ({
  currentUser: store.currentUser,
});

export default connect(mapStateToProps)(App);

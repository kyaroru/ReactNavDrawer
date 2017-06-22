import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  AsyncStorage,
} from 'react-native';
import * as Colors from '../../themes/colors';
import { getNavigationOptions } from '../../utils/navigation';
import * as ducks from '../../ducks';
import { connect } from 'react-redux';

class LoginScreen extends Component {

  login() {
    const { updateCurrentUser } = this.props;
    updateCurrentUser({ name: 'carol '});
    console.log('login');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.input, { borderColor: Colors.primary }]}>
          <TouchableOpacity style={styles.btnSubmit} onPress={() => this.login()}>
            <Text style={{ textAlign: 'center', color: Colors.primary }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  btnSubmit: {
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});

LoginScreen.navigationOptions = ({ navigation }) => getNavigationOptions('Login', Colors.primary, 'white');

const mapStateToProps = store => ({
  currentUser: store.currentUser,
});

const mapDispatchToProps = {
  updateCurrentUser: ducks.updateCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import * as Colors from '../../themes/colors';

class UserScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', color: Colors.primary, marginRight: 10 }}>User Screen</Text>
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
});

export default UserScreen;

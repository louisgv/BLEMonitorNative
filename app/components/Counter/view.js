import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions,} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';

export default class Counter extends Component {
  shouldComponentUpdate() {
    alert('!');
    return false;
  }

  render() {
    const model = this.props.model;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to lshell
        </Text>
        <Text>Counter: {model.counter}</Text>
        <Text>Total clicks: {model.total}</Text>
        <Button onPress={model.increase}>+</Button>
        <Button onPress={model.decrease}>-</Button>
      </View>
    )
  }
}
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

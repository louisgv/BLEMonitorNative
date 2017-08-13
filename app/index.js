import {useStrict} from 'mobx';
useStrict(true);

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Router, Scene,} from 'react-native-mobx';
import {observer} from 'mobx-react/native';

import {Counter, CounterModel,} from 'containers/Counter';


@observer
export default class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <Counter model={CounterModel}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1
		justifyContent: 'center',
		alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

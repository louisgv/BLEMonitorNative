import {useStrict} from 'mobx';
useStrict(true);

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Router, Scene,} from 'react-native-mobx';
import {observer} from 'mobx-react/native';

import Swiper from 'react-native-swiper';

import SnapCamera from 'components/SnapCamera';

import {Terminal, TerminalModel,} from 'containers/Terminal';

@observer
export default class App extends Component {
  render() {
    return (
      <View style={styles.terminal}>
        <Terminal model={TerminalModel}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  terminal: {
    flex: 1
  },
  camera: {
    flex: 1
  },
  counter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

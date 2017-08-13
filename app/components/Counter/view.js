import React, {Component} from 'react';

import { ImmutableVirtualizedList } from 'react-native-immutable-list-view';

import {View, Text, TouchableOpacity, StyleSheet, Dimensions,} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';

export default class Counter extends Component {
  shouldComponentUpdate() {
    alert('!');
    return false;
  }

	componentWillMount() {
		const model = this.props.model;
		model.enableSubscription();
	}

	generateRow =({item})=> <View style={styles.cmdWrapper}>
		<Status {...item} model={this.props.model} style={styles.command} />
	</View>

  render() {
    const model = this.props.model;
    return (
      <View style={styles.container}>
				<ImmutableVirtualizedList
					ref={model.setListRef}
					style={styles.cmdList}
					immutableData={model.displayStack}
					renderItem={this.generateRow}
					keyExtractor={(item, index) => index}
				/>
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

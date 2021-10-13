import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import ItemsList from '../components/ItemsList';

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ItemsList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ItemsList from '../components/ItemsList';

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: [],
      favorites: []
    }
  }

  async getKeys() {
    try {
      const keys = await AsyncStorage.getAllKeys();
      this.setState({ keys: keys });
    } catch(e) {
      console.log(error);
    } finally {
    }
  }

  async getAllFavorites() {
    try {
      const favorites = await AsyncStorage.multiGet(this.state.keys);
      this.setState({ favorites: favorites });
    } catch(e) {
      console.log(error);
    } finally {
    }
  }

  componentDidMount() {
    this.getKeys();
    this.getAllFavorites();
  }

  com

  render() {
    return (
      <View style={styles.container}>
        <ItemsList
          category='Favorites'
          favorites={this.state.favorites}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: 'black',
    fontWeight: '700',
    fontSize: 30
  }
});

import React from 'react';
import { StyleSheet, View } from 'react-native';

import BottomTabNavigator from './src/navigation/BottomTabNavigator';

const StarWarsApp = () => {
  return (
    <BottomTabNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default StarWarsApp;

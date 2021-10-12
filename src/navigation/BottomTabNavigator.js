import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import ItemsList from '../components/ItemsList';

const Movies = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchInput}>
        <Icon type='material' name="search" size={20} />
        <TextInput
          placeholder='Search'
          placeholderTextColor='black'
        />
      </View>
      <ItemsList />
    </View>
  );
}

const People = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchInput}>
        <Icon type='material' name="search" size={20} />
        <TextInput
          placeholder='Search'
          placeholderTextColor='black'
        />
      </View>
      <ItemsList />
    </View>
  );
}

const Favorites = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchInput}>
        <Icon type='material' name="search" size={20} />
        <TextInput
          placeholder='Search'
          placeholderTextColor='black'
        />
      </View>
      <ItemsList />
    </View>
  );
}

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerTitleAlign: 'center',
        tabBarItemStyle: {
          borderColor: 'black',
          borderRightWidth: 1,
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 15
        }
        }}
      >
        <Tab.Screen
          name='Movies'
          component={Movies}
          options={{
            tabBarIcon: ({color, size}) => (<Icon type='material' name='theaters' color={color} size={size} />)
          }}
        />
        <Tab.Screen
          name='People'
          component={People}
          options={{
            tabBarIcon: ({color, size}) => (<Icon type='material' name='person' color={color} size={size} />)
          }}
        />
        <Tab.Screen
          name='Favorites'
          component={Favorites}
          options={{
            tabBarIcon: ({color, size}) => (<Icon type='material' name='favorite' color={color} size={size} />)
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderWidth: 5,
    borderColor: 'black',
    marginBottom: 25,
    textAlign: 'center'
  }
});

export default BottomTabNavigator;

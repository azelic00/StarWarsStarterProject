import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import { MoviesStackNavigator, PeopleStackNavigator, FavoritesStackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarItemStyle: {
          borderColor: 'black',
          borderRightWidth: 1
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 15
        }
        }}
      >
        <Tab.Screen
          name='Movies'
          component={MoviesStackNavigator}
          options={{
            tabBarIcon: ({color, size}) => (<Icon type='material' name='theaters' color={color} size={size} />)
          }}
        />
        <Tab.Screen
          name='People'
          component={PeopleStackNavigator}
          options={{
            tabBarIcon: ({color, size}) => (<Icon type='material' name='person' color={color} size={size} />)
          }}
        />
        <Tab.Screen
          name='Favorites'
          component={FavoritesStackNavigator}
          options={{
            tabBarIcon: ({color, size}) => (<Icon type='material' name='favorite' color={color} size={size} />)
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNavigator;

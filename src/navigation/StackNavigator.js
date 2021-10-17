import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Movies from '../screens/Movies';
import People from '../screens/People';
import Favorites from '../screens/Favorites';
import Details from '../screens/Details';

const Stack = createStackNavigator();

const MoviesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerTitleAlign: 'center'
    }}>
      <Stack.Screen
        name=' Movies '
        component={Movies}
      />
      <Stack.Screen
        name='Movie details'
        component={Details}
      />
    </Stack.Navigator>
  );
}

export {MoviesStackNavigator};


const PeopleStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerTitleAlign: 'center'
    }}>
      <Stack.Screen
        name=' People '
        component={People}
      />
      <Stack.Screen
        name='Person details'
        component={Details}
      />
    </Stack.Navigator>
  );
}

export {PeopleStackNavigator};


const FavoritesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerTitleAlign: 'center'
    }}>
      <Stack.Screen
        name=' Favorites '
        component={Favorites}
      />
      <Stack.Screen
        name='Favorite details'
        component={Details}
      />
    </Stack.Navigator>
  );
}

export {FavoritesStackNavigator}

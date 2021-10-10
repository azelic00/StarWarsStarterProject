import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Movies = () => {
  return (
    <View style={styles.container}>
      <Text>Movies</Text>
    </View>
  );
}

const People = () => {
  return (
    <View style={styles.container}>
      <Text>People</Text>
    </View>
  );
}

const Favorites = () => {
  return (
    <View style={styles.container}>
      <Text>Favorites</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const StarWarsApp = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerTitleAlign: 'center',
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 15
        },
        tabBarIconStyle: { display: 'none' }
        }}
      >
        <Tab.Screen name='Movies' component={Movies} />
        <Tab.Screen name='People' component={People} />
        <Tab.Screen name='Favorites' component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
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

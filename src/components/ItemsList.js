import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

import DisplayItem from './DisplayItem';

const ItemsList = (props) => {
  if (props.category=='People') {
    return (
      <View style={styles.container}>
        <FlatList 
          data={props.people}
          renderItem={({item}) => <DisplayItem category={props.category} {...item} />}
          keyExtractor={(item) => item.name}
        />       
      </View>
    );
  } else if (props.category=='Movies') {
    return (
      <View style={styles.container}>
        <FlatList
          data={props.movies}
          renderItem={({item}) => <DisplayItem category={props.category} {...item} />}
          keyExtractor={(item) => item.episode_id}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>Ups! Something went wrong!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ItemsList;
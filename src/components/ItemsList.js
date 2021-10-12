import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import DisplayItem from './DisplayItem';

const Data = [
  {
    id: 1,
    name: 'Person1'
  },
  {
    id: 2,
    name: 'Person2'
  },
  {
    id: 3,
    name: 'Person3'
  },
  {
    id: 4,
    name: 'Person4'
  },
  {
    id: 5,
    name: 'Person1'
  },
  {
    id: 6,
    name: 'Person2'
  },
  {
    id: 7,
    name: 'Person3'
  },
  {
    id: 8,
    name: 'Person4'
  },
];

const ItemsList = () => {
  return (
    <View style={styles.container}>
      <FlatList data={Data} renderItem={({item}) => <DisplayItem {...item} />} keyExtractor={item => item.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ItemsList;
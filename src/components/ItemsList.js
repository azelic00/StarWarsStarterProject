import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

import DisplayItem from './DisplayItem';
import DisplayFavorites from './DisplayFavorites';

const ItemsList = (props) => {
  if (props.category == 'People') {
    return (
      <View style={styles.container}>
        <FlatList 
          data={props.people}
          renderItem={({item}) => <DisplayItem
                                    category={props.category}
                                    onDetailShow={props.onPersonDetailShow}
                                    onFavoriteSave={props.onPersonFavoriteSave}
                                    {...item}
                                  />}
          keyExtractor={(item) => item.name}
        />       
      </View>
    );
  } else if (props.category == 'Movies') {
    return (
      <View style={styles.container}>
        <FlatList
          data={props.movies}
          renderItem={({item}) => <DisplayItem
                                    category={props.category}
                                    onDetailShow={props.onMovieDetailShow}
                                    onFavoriteSave={props.onMovieFavoriteSave}
                                    {...item}
                                  />}
          keyExtractor={(item) => item.episode_id}
        />
      </View>
    );
  } else if (props.category == 'Favorites') {
    return (
      <View style={styles.container}>
        <FlatList
          data={props.favorites}
          renderItem={({item}) => <DisplayFavorites {...item} />}
          keyExtractor={(item) => item.episode_id || item.title}
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
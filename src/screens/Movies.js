import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SearchBar from '../components/SearchBar';
import ItemsList from '../components/ItemsList';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchMovie: '',
      movies: []
    }
  }

  async getMovie() {
    try {
      const response = await fetch('https://swapi.dev/api/films/?search=' + this.state.searchMovie);
      const json = await response.json();
      if (this.state.searchMovie) {
        this.setState({ movies: json.results });
      } else {
        this.setState({ movies: [] });
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  onChangeMovieSearch = (inputMovie) => {
    this.setState({ searchMovie: inputMovie });
    this.getMovie();
  }

  onMovieDetailShow = () => {
    this.props.navigation.navigate('Movie details', {data: this.state.movies, component: 'Movies'});
  }

  async setFavoriteItem(value) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('key1', jsonValue)
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  onMovieFavoriteSave = () => {
    this.setFavoriteItem(this.state.movies[0]);
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar onChangeItemSearch={this.onChangeMovieSearch} />
        <ItemsList
          category='Movies'
          onMovieDetailShow={this.onMovieDetailShow}
          onMovieFavoriteSave={this.onMovieFavoriteSave}
          movies={this.state.movies}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

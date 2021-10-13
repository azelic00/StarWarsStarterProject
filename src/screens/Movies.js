import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

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

  render() {
    return (
      <View style={styles.container}>
        <SearchBar onChangeItemSearch={this.onChangeMovieSearch} />
        <ItemsList category='Movies' movies={this.state.movies} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import ItemsList from '../components/ItemsList';

export default class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPerson: '',
      people: []
    }
  }

  async getPerson() {
    try {
      const response = await fetch('https://swapi.dev/api/people/?search=' + this.state.searchPerson);
      const json = await response.json();
      this.setState({ people: json.results });
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  onChangePersonSearch = (inputPerson) => {
    this.setState({ searchPerson: inputPerson });
    this.getPerson();
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar onChangeItemSearch={this.onChangePersonSearch} />
        <ItemsList category='People' people={this.state.people} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

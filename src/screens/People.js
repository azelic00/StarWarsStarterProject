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
      if (this.state.searchPerson) {
        this.setState({ people: json.results });
      } else {
        this.setState({ people: [] });
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  onChangePersonSearch = (inputPerson) => {
    this.setState({ searchPerson: inputPerson });
    this.getPerson();
  }

  onPersonDetailShow = () => {
    this.props.navigation.navigate('Person details', {data: this.state.people, component: 'People'});
  }

  onPersonFavoriteSave = () => {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar onChangeItemSearch={this.onChangePersonSearch} />
        <ItemsList
          category='People'
          onPersonDetailShow={this.onPersonDetailShow}
          onPersonFavoriteSave={this.onPersonFavoriteSave}
          people={this.state.people}
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

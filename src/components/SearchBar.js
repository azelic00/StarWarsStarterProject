import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const SearchBar = (props) => {
  return (
    <View style={styles.searchInput}>
      <Icon type='material' name="search" size={20} />
      <TextInput
        placeholder='Search'
        placeholderTextColor='black'
        onChangeText={props.onChangeItemSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderWidth: 5,
    borderColor: 'black',
    marginBottom: 25,
    textAlign: 'center'
  }
});

export default SearchBar;

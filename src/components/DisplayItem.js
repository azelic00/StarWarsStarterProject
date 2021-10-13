import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const DisplayItem = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.picture}>
          {props.category=='People' ? (
            <Text>{props.birth_year}</Text>
          ) : (
            <Text>{props.episode_id}</Text>
          )}
        </View>
        <Text style={styles.title}>
          {props.category=='People' ? (
            props.name
          ) : (
            props.title
          )}
        </Text>
        <View style={styles.icon}>
          <TouchableOpacity>
            <Icon type='material' name='star-outline' />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderWidth: 2,
    borderColor: 'black'
  },
  picture: {
    margin: 5,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center'
  },
  title: {
    margin: 5,
    textAlign: 'center'
  },
  icon: {
    alignItems: 'flex-end'
  }
});

export default DisplayItem;
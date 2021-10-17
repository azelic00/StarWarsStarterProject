import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Details = (props) => {
  if (props.route.params.component == 'Movies') {
    return (
      <View style={styles.container}>
        <Text stayle={styles.text}>Title: {props.route.params.data[0].title}</Text>
        <Text stayle={styles.text}>Episode: {props.route.params.data[0].episode_id}</Text>
        <Text stayle={styles.text}>Opening crawl: {props.route.params.data[0].opening_crawl}</Text>
        <Text stayle={styles.text}>Director: {props.route.params.data[0].director}</Text>
        <Text stayle={styles.text}>Producer: {props.route.params.data[0].producer}</Text>
        <Text stayle={styles.text}>Release date: {props.route.params.data[0].release_date}</Text>
      </View>
    ); 
  } else if (props.route.params.component == 'People') {
    return (
      <View style={styles.container}>
        <Text stayle={styles.text}>Name: {props.route.params.data[0].name}</Text>
        <Text stayle={styles.text}>Height: {props.route.params.data[0].height}</Text>
        <Text stayle={styles.text}>Mass: {props.route.params.data[0].mass}</Text>
        <Text stayle={styles.text}>Hair color: {props.route.params.data[0].hair_color}</Text>
        <Text stayle={styles.text}>Skin color: {props.route.params.data[0].skin_color}</Text>
        <Text stayle={styles.text}>Eye color: {props.route.params.data[0].eye_color}</Text>
        <Text stayle={styles.text}>Birth year: {props.route.params.data[0].birth_year}</Text>
        <Text stayle={styles.text}>Gender: {props.route.params.data[0].gender}</Text>
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
    flex: 1,
    display: 'flex',
    padding: 10,
    backgroundColor: 'white'
  },
  text:{
    color: 'black',
    fontWeight: '700',
    fontSize: 30
  }
});

export default Details;

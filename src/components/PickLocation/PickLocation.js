import React, { Component } from 'react';
import { View, Image, Button, StyleSheet, Text } from 'react-native';

import imagePlaceHolder from '../../assets/beautiful-place.jpg';

class PickLocation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Text>Image Preview!</Text>
        </View>
        <View style={styles.button}>
          <Button style={styles.button} title="Locate me" onPress={() => alert('locate')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: 'center'
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  }
});

export default PickLocation;
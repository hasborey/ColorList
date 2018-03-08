import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
} from 'react-native'

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.button}>Green</Text>
        <Text style={styles.button}>Red</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'lightskyblue',
  },
  button: {
    flex: 1,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  }
})
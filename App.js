import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
} from 'react-native'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      backgroundColor: 'lightskyblue',
    }
  }
  setBgColor(backgroundColor) {
    this.setState({backgroundColor})
  }

  render () {
    const { backgroundColor } = this.state

    return (
      <View style={[styles.container, { backgroundColor }]}>
        <Text onPress={() => this.setBgColor('lightgreen')} style={styles.button}>Green</Text>
        <Text onPress={() => this.setBgColor('lightcoral')} style={styles.button}>Red</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
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
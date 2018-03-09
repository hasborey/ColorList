import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
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
        <TouchableHighlight
          onPress={() => this.setBgColor('lightgreen')}
          style={styles.button}
        >
          <Text>Green</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.setBgColor('lightcoral')}
          style={styles.button}
        >
          <Text>Red</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  button: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255,.5)',
  }
})
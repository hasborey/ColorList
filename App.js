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
          underlayColor='gray'
          style={styles.button}
        >
          <View style={styles.row}>
            <View style={[styles.sample, {backgroundColor: 'lightgreen'}]} />
            <Text style={styles.text}>Green</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.setBgColor('lightcoral')}
          underlayColor='gray'
          style={styles.button}
        >
          <View style={styles.row}>
            <View style={[styles.sample, {backgroundColor: 'lightcoral'}]} />
            <Text style={styles.text}>Red</Text>
          </View>
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
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255,.5)',
  },
  row: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
  },
  sample: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 1,
  }
})
import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'
import ColorButton from './components/ColorButton'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      backgroundColor: 'lightskyblue',
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(backgroundColor) {
    this.setState({backgroundColor})
  }

  render () {
    const { backgroundColor } = this.state

    return (
      <View style={[styles.container, { backgroundColor }]}>
        <ColorButton backgroundColor="green" onSelect={this.changeColor} />
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
})
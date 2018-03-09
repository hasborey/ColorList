import React, {Component} from 'react'
import {
  Text,
  ScrollView,
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
      <ScrollView style={[styles.container, { backgroundColor }]}>
        <ColorButton backgroundColor="khaki" onSelect={this.changeColor} />
        <ColorButton backgroundColor="lavender" onSelect={this.changeColor} />
        <ColorButton backgroundColor="lavenderblush" onSelect={this.changeColor} />
        <ColorButton backgroundColor="lightblue" onSelect={this.changeColor} />
        <ColorButton backgroundColor="aliceblue" onSelect={this.changeColor} />
        <ColorButton backgroundColor="antiquewhite" onSelect={this.changeColor} />
        <ColorButton backgroundColor="aqua" onSelect={this.changeColor} />
        <ColorButton backgroundColor="aquamarine" onSelect={this.changeColor} />
        <ColorButton backgroundColor="azure" onSelect={this.changeColor} />
        <ColorButton backgroundColor="beige" onSelect={this.changeColor} />
        <ColorButton backgroundColor="bisque" onSelect={this.changeColor} />
        <ColorButton backgroundColor="brown" onSelect={this.changeColor} />
        <ColorButton backgroundColor="burlywood" onSelect={this.changeColor} />
        <ColorButton backgroundColor="cadetblue" onSelect={this.changeColor} />
        <ColorButton backgroundColor="chartreuse" onSelect={this.changeColor} />
        <ColorButton backgroundColor="chocolate" onSelect={this.changeColor} />
        <ColorButton backgroundColor="coral" onSelect={this.changeColor} />
        <ColorButton backgroundColor="cornflowerblue" onSelect={this.changeColor} />
        <ColorButton backgroundColor="cornsilk" onSelect={this.changeColor} />
        <ColorButton backgroundColor="crimson" onSelect={this.changeColor} />
        <ColorButton backgroundColor="cyan" onSelect={this.changeColor} />
        <ColorButton backgroundColor="darkblue" onSelect={this.changeColor} />
        <ColorButton backgroundColor="darkcyan" onSelect={this.changeColor} />
        <ColorButton backgroundColor="darkgoldenrod" onSelect={this.changeColor} />
        <ColorButton backgroundColor="darkgray" onSelect={this.changeColor} />
        <ColorButton backgroundColor="darkgreen" onSelect={this.changeColor} />
        <ColorButton backgroundColor="darkkhaki" onSelect={this.changeColor} />
        <ColorButton backgroundColor="darkmagenta" onSelect={this.changeColor} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
  },
})
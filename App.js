import React, {Component} from 'react'
import {
  Text,
  View,
  ListView,
  StyleSheet,
} from 'react-native'
import ColorButton from './components/ColorButton'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    const availableColors = [
      'green',
      'blue',
      'pink',
      'gray',
      'black',
      'red',
      'lightblue',
      'coral',
      'green',
      'blue',
      'pink',
      'gray',
      'black',
      'red',
      'lightblue',
    ]

    this.state = {
      backgroundColor: 'lightskyblue',
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(backgroundColor) {
    this.setState({backgroundColor})
  }

  render () {
    const { backgroundColor, dataSource } = this.state

    return (
      <ListView
        style={[styles.container, { backgroundColor }]}
        dataSource={dataSource}
        renderRow={(color) => (
          <ColorButton backgroundColor={color} onSelect={this.changeColor} />
        )}
        renderHeader={() => <Text style={styles.header}>Color Lists</Text> }
      >
      </ListView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 35,
    padding: 10,
    backgroundColor: 'lightgray',
    textAlign: 'center',
  },
})
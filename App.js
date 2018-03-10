import React, {Component} from 'react'
import {
  Text,
  View,
  ListView,
  StyleSheet,
} from 'react-native'
import ColorButton from './components/ColorButton'
import ColorForm from './components/ColorForm'

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
    ]

    this.state = {
      backgroundColor: 'lightskyblue',
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    }
    this.changeColor = this.changeColor.bind(this)
    this.newColor = this.newColor.bind(this)
  }

  changeColor (backgroundColor) {
    this.setState({backgroundColor})
  }

  newColor (color) {
    const availableColors = [
      ...this.state.availableColors,
      color
    ]
    this.setState({availableColors})
    this.setState({dataSource: this.ds.cloneWithRows(availableColors)})
  }

  render () {
    const { backgroundColor, dataSource } = this.state

    return (
      <ListView
        style={[styles.container, { backgroundColor }]}
        dataSource={dataSource}
        renderRow={(color) => (
          <ColorButton
            backgroundColor={color}
            onSelect={this.changeColor}
          />
        )}
        renderHeader={() => (
          <ColorForm
            style={styles.colorForm}
            onNewColor={this.newColor}
          />
        )}
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
  colorForm: {
    flex: 1,
  }
})
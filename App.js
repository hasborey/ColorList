import React, {Component} from 'react'
import {
  Text,
  View,
  ListView,
  StyleSheet,
  AsyncStorage,
} from 'react-native'
import ColorButton from './components/ColorButton'
import ColorForm from './components/ColorForm'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    const availableColors = []

    this.state = {
      backgroundColor: 'lightskyblue',
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    }
    this.changeColor = this.changeColor.bind(this)
    this.newColor = this.newColor.bind(this)
  }

  componentDidMount () {
    AsyncStorage.getItem('@ColorListStore:Colors', (err, data) => {
      if (err) {
        console.error('Error loading colors', err)
      } else if (data) {
        const availableColors = JSON.parse(data)
        this.setState({
          availableColors,
          dataSource: this.ds.cloneWithRows(availableColors)
        })
      }
    })
  }

  changeColor (backgroundColor) {
    this.setState({backgroundColor})
  }

  saveColors (colors) {
    AsyncStorage.setItem('@ColorListStore:Colors', JSON.stringify(colors))
  }

  newColor (color) {
    const availableColors = [
      ...this.state.availableColors,
      color
    ]
    this.setState({availableColors})
    this.setState({dataSource: this.ds.cloneWithRows(availableColors)})
    this.saveColors(availableColors)

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
          <ColorForm onNewColor={this.newColor} />
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
})
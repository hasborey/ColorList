import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  ListView,
  StyleSheet,
  AsyncStorage,
} from 'react-native'
import ColorButton from './ColorButton'
import ColorForm from './ColorForm'

export default class ColorList extends Component {
  constructor (props) {
    super(props)

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    const availableColors = []

    this.state = {
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    }
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
    const { dataSource } = this.state

    return (
      <ListView
        style={styles.container}
        dataSource={dataSource}
        renderRow={(color) => (
          <ColorButton
            backgroundColor={color}
            onSelect={(color) => this.props.onColorSelected(color)}
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

ColorList.defaultProps = {
  onColorSelected: f=>f
}

ColorList.propTypes = {
  onColorSelected: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
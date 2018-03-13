import React, {Component} from 'react'
import { Alert } from 'react-native'
import ColorList from './components/ColorList'

export default class App extends Component {
  render () {
    return (
        <ColorList onColorSelected={color => Alert.alert(color)} />
    )
  }
}

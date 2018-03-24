import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  TextInput,
  Text,
  View,
  StyleSheet,
} from 'react-native'

export default class ColorForm extends Component {
  constructor() {
    super()

    this.state = {
      txtColor: '',
    }

    this.submit = this.submit.bind(this)
  }

  submit () {
    if(!this.state.txtColor) {
      return false
    }
    this.props.onNewColor(this.state.txtColor.toLowerCase())
    this.setState({txtColor: ''})
  }

  render () {
    const { navigate } = this.props.navigation
    const { txtColor } = this.state
    const uri = 'https://www.w3schools.com/colors/colors_names.asp'

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a color ..."
          onChangeText={(txtColor) => this.setState({txtColor})}
          value={this.state.txtColor}
        />
        <Text onPress={() => this.submit()} style={[styles.button, { marginRight: 0 }]}>Add</Text>
        <Text onPress={() => navigate('Web', {uri})} style={styles.button}>Info</Text>
      </View>
    )
  }
}

ColorForm.propTypes = {
  onNewColor: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightgray',
  },
  textInput: {
    flex: 1,
    fontSize: 20,
    margin: 10,
    marginRight: 0,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'snow',
  },
  button: {
    backgroundColor: 'lightblue',
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 10,
  }
})
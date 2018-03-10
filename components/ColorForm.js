import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  TextInput,
  Text,
  View,
  StyleSheet,
} from 'react-native'

export default class ColorForm extends Component {
  constructor (props) {
    super(props)

    this.state = ({
      txtColor: ''
    })
  }

  submit () {
    this.props.onNewColor(this.state.txtColor.toLowerCase())
    this.setState({txtColor: ''})
  }

  render () {
    const { onTab } = this.props
    const { txtColor } = this.state

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a color ..."
          onChangeText={(txtColor) => this.setState({txtColor})}
          value={this.state.txtColor}
        />
        <Text style={styles.button} onPress={() => this.submit()}>Add</Text>
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
    justifyContent: 'space-around',
    margin: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'snow',
  },
  button: {
    padding: 10,
    margin: 10,
    marginRight: 0,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 8,
  },
})
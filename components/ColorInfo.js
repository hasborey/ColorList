import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import ColorTools from 'color'

const ColorInfo = ({ navigation }) => {
  const color = ColorTools(navigation.state.params.color)
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={[styles.text, { color: color.negate() }]}>{color.hex().toString()}</Text>
      <Text style={[styles.text, { color: color.negate() }]}>{color.rgb().toString()}</Text>
      <Text style={[styles.text, { color: color.negate() }]}>{color.hsl().toString()}</Text>
    </View>
  )
}

ColorInfo.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.color
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  }
})

export default ColorInfo
import React from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native'

const ColorButton = ({backgroundColor, onSelect=f=>f}) => (
  <TouchableHighlight
    onPress={() => onSelect(backgroundColor)}
    underlayColor='gray'
    style={styles.button}
  >
    <View style={styles.row}>
      <View style={[styles.sample, {backgroundColor}]} />
      <Text style={styles.text}>{backgroundColor}</Text>
    </View>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255, 255, 255,.5)',
  },
  row: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
  },
  sample: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 1,
  }
})

export default ColorButton
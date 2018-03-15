import React, {Component} from 'react'
import { StackNavigator } from 'react-navigation'
import ColorList from './components/ColorList'
import ColorInfo from './components/ColorInfo'

const App = StackNavigator({
  Home: { screen: ColorList },
  Detail: { screen: ColorInfo }
})

export default App
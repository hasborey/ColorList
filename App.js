import React, {Component} from 'react'
import { StackNavigator } from 'react-navigation'
import ColorList from './components/ColorList'
import ColorInfo from './components/ColorInfo'
import WebPage from './components/WebPage'

const App = StackNavigator({
  Home: { screen: ColorList },
  Detail: { screen: ColorInfo },
  Web: { screen: WebPage }
})

export default App
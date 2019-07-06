// App.js

import React from 'react'
import VueMain from './src/containers/ViewMain/ViewMain'
import { ImageBackground} from 'react-native'

export default class App extends React.Component {
  render() {
    console.log('rr')
    return (
    <ImageBackground
          source={require('./Communs/Images/fond.png')}
          style={{width: '100%', height: '100%'}}>
          <VueMain/>
      </ImageBackground>
    )
  }
}
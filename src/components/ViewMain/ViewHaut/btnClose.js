//src\components\ViewMain\ViewHaut\btnClose.js
import React, { Component } from 'react'
import {  Image,
          TouchableHighlight,
          BackHandler,
          }
from 'react-native'

import MeStyles from '../../../containers/ViewMain/ViewHaut/mesStyles'

export default class BtnClose extends Component {
  render() {
    return (
        <TouchableHighlight  onPress = { () => BackHandler.exitApp() }               
          style = { MeStyles.caseFermer }>
            <Image
              style = { MeStyles.imageCroixFermer }
              source = {require('./images/CroixFermer.png' )}/>
        </TouchableHighlight >
    )
  }
}

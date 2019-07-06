//src\containers\ViewMain\ViewHaut\ViewHaut.js
import React, {Component} from 'react'
import { View } from 'react-native'

import MeStyles from './mesStyles'
import TitreApp from '../../../components/ViewMain/ViewHaut/titreApp'
import BtnClose from '../../../components/ViewMain/ViewHaut/btnClose'



export default class ViewHaut extends Component {
  render() {
    return (
      <View style = { MeStyles.vueHaut }>
        <View style = { MeStyles.caseVideHaut }>
        </View>
        <View style = { MeStyles.caseTitre }>
            <TitreApp/>
        </View>
            <BtnClose style = {{backgroundColor: 'red'}} />
      </View>
    )
  }
}

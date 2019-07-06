//src\components\ViewMain\ViewHaut\titreApp.js
import React, { Component } from 'react'
import { Text } from 'react-native'

import GLOBAL from '../../../../Communs/js/Globales'
import MeStyles from '../../../containers/ViewMain/ViewHaut/mesStyles'

export default class TitreApp extends Component {
  render() {
    return (
            <Text style = { MeStyles.texteTitre } >
                {GLOBAL.TITRE_APP}
            </Text>
    );
  }
}

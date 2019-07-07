//src\components\ViewMain\ViewHaut\titreApp.js
import React, { Component } from 'react'
import { Text } from 'react-native'

import MeStyles from '../../../containers/ViewMain/ViewHaut/mesStyles'

import { en , fr} from '../../../../Communs/js/Languages'
import * as Localization from 'expo-localization'
import i18n from 'i18n-js'

i18n.translations = { en ,fr }
// si ce n'est pas un téléphone français alors language anglais
if (Localization.locale.split('-')[0] != 'fr') {
  i18n.locale =  'en'
}else{
  i18n.locale =  'fr'
}  

export default class TitreApp extends Component {
  render() {
    return (
            <Text style = { MeStyles.texteTitre } >
                {i18n.t( 'titreApp' )  }
            </Text>
    );
  }
}

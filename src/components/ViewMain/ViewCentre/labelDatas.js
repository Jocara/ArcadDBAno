import React from 'react'
import { View, Text } from 'react-native'


import { en , fr } from '../../../../Communs/js/Languages'
import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import MesStyles from '../../../containers/ViewMain/ViewCentre/mesStyles'


function LabelDatas ( type ) {
 
    i18n.translations = { en ,fr }
      // si ce n'est pas un téléphone français alors language anglais
    if ( Localization.locale.split('-')[0] != 'fr' ) {
        i18n.locale =  'en'
    }else{
        i18n.locale =  'fr'
    }  

    switch( type ){
        case 'NbProjets':  
            labelDatas = i18n.t( 'labelDatas.nbProjets' ) 
            break 
        case 'TotalDatas':
            labelDatas = i18n.t( 'labelDatas.totalDatas' )  
            break
        case 'TotalDatasAno':  
            labelDatas = i18n.t( 'labelDatas.totalDatasAno' ) 
            break 
        case 'MomentLastAno':
            labelDatas = i18n.t( 'labelDatas.momentLastAno' )  
            break    
    }
    
    return (
        <View style = { MesStyles.vueLibelle }>
            <Text style = { MesStyles.texteLibelle }>
                { labelDatas }
            </Text>
        </View>
    ) 
}
export default LabelDatas
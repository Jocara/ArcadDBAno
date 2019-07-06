
import React, { Component } from 'react'
import { View } from 'react-native'
import IconeData from '../../../../components/ViewMain/ViewCentre/iconeDatas'
import NbProjets from '../../../../components/ViewMain/ViewCentre/ViewNbProjets/datas'
import LabelDatas from '../../../../components/ViewMain/ViewCentre/labelDatas'

import MesStyles from '../../ViewCentre/mesStyles'

export default class ViewNbProjets extends Component {
  render() {
      
    return (
      <View style = {[MesStyles.vueLigne,  
        { marginTop: 20 }]}>
          {IconeData('NbProjets')}
          {LabelDatas('NbProjets')}          
          <NbProjets/>
      </View>
    );
  }
}
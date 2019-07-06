
import React, { Component } from 'react'
import { View } from 'react-native'
import IconeData from '../../../../components/ViewMain/ViewCentre/iconeDatas'
import NbTotalData from '../../../../components/ViewMain/ViewCentre/ViewTotalDatas/datas'
import LabelDatas from '../../../../components/ViewMain/ViewCentre/labelDatas'

import MesStyles from '../../ViewCentre/mesStyles'

export default class ViewTotalDatas extends Component {
  render() {
      
    return (
      <View style = {[MesStyles.vueLigne,  
        { marginTop: 20 }]}>
          {IconeData('TotalDatas')}
          {LabelDatas('TotalDatas')} 
          <NbTotalData/>         
      
      </View>
    );
  }
}
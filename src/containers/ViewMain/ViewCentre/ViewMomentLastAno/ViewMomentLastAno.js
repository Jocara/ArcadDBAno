
import React, { Component } from 'react'
import { View } from 'react-native'
import IconeData from '../../../../components/ViewMain/ViewCentre/iconeDatas'
import MomentLastAno from '../../../../components/ViewMain/ViewCentre/ViewMomentLastAno/datas'
import LabelDatas from '../../../../components/ViewMain/ViewCentre/labelDatas'

import MesStyles from '../mesStyles'

export default class ViewMomentLastAno extends Component {
  render() {
      
    return (
      <View style = {[MesStyles.vueLigne,  
        { marginTop: 20 }]}>
          {IconeData('MomentLastAno')}
          {LabelDatas('MomentLastAno')}          
          <MomentLastAno/>
      </View>
    );
  }
}
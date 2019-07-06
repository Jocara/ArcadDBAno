import React, { Component } from 'react'
import { View } from 'react-native'
import IconeData from '../../../../components/ViewMain/ViewCentre/iconeDatas'
import NbTotalDataAno from '../../../../components/ViewMain/ViewCentre/ViewTotalDatasAno/datas'
import LabelDatas from '../../../../components/ViewMain/ViewCentre/labelDatas'

import MesStyles from '../mesStyles'

export default class ViewTotalDatasAno extends Component {
  render() {
      
    return (
      <View style = {[MesStyles.vueLigne,  
        { marginTop: 20 }]}>
          {IconeData('TotalDatasAno')}
          {LabelDatas('TotalDatasAno')}          
          <NbTotalDataAno/>
      </View>
    );
  }
}
import React, { Component } from 'react'
import { View } from 'react-native'

import MeStyles from '../ViewCentre/mesStyles'
import ViewNbProjets from './ViewNbProjets/ViewNbProjets'
import ViewTotalDatas from './ViewTotalDatas/ViewTotalDatas'
import ViewTotalDatasAno from './ViewTotalDatasAno/ViewTotalDatasAno'
import ViewMomentLastAno from './ViewMomentLastAno/ViewMomentLastAno'


export default class ViewCentre extends Component {
  render() {
    return (
      <View style = {MeStyles.commun}>
        <ViewNbProjets/> 
        <ViewTotalDatas/> 
        <ViewTotalDatasAno/> 
        <ViewMomentLastAno/> 
      </View>
    )
  }
}

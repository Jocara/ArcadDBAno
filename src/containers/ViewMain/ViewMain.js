//src\containers\ViewMain\viewMain.js
import React, { Component } from 'react'
import { View } from 'react-native'

import MesStyles from './MesStyles'
import ViewHaut from './ViewHaut/ViewHaut'
import ViewCentre from './ViewCentre/ViewCentre'
import ViewBas  from './ViewBas/viewBas'


export default class VueMain extends Component {
  render() {
    return (
      <View style = { MesStyles.containerMain}>

        <View style = { MesStyles.containerHaut}>
          <ViewHaut/>
        </View>

        <View style = { MesStyles.containerData}>
          <ViewCentre/>
        </View>

        <View style = { [MesStyles.containerJauge,MesStyles.rNSpeedometer]}>
          <ViewBas/>
        </View>    
      </View>
    );
  }
}
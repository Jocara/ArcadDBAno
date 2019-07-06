import React, { Component } from 'react';
import { Text, View } from 'react-native';
import JaugeFlag from '../../../components/ViewMain/ViewBas/viewJauge'

export default class ViewBas extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <JaugeFlag/>
      </View>
    );
  }
}

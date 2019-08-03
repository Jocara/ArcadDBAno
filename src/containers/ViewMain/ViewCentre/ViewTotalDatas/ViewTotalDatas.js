
import React, { Component } from 'react'
import { Animated, Easing  } from 'react-native'
import IconeData from '../../../../components/ViewMain/ViewCentre/iconeDatas'
import NbTotalData from '../../../../components/ViewMain/ViewCentre/ViewTotalDatas/datas'
import LabelDatas from '../../../../components/ViewMain/ViewCentre/labelDatas'

import MesStyles from '../../ViewCentre/mesStyles'

export default class ViewTotalDatas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topPosition: new Animated.Value(0),
      leftPosition: new Animated.Value(1000),
    }
  }
  componentDidMount() {
    Animated.parallel([
      Animated.spring(
        this.state.leftPosition,
        {
          toValue: 0,
          tension: 8,
          friction: 3
        }
      ),
      Animated.timing(
        this.state.leftPosition,
        {
          toValue: 0,
          duration: 1000,
          delay: 1000,
          easing: Easing.elastic(2)
        }
      )
    ]).start()
  }

  render() {
      
    return (
      <Animated.View style = {[MesStyles.vueLigne, 
                              { marginTop: 20 },
                              { left: this.state.leftPosition }
      ]}>   
          {IconeData('TotalDatas')}
          {LabelDatas('TotalDatas')} 
          <NbTotalData/>              
      </Animated.View>
    );
  }
}
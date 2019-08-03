import React, { Component } from 'react';
import { Animated, Easing  } from 'react-native';
import JaugeFlag from '../../../components/ViewMain/ViewBas/viewJauge'

export default class ViewBas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topPosition: new Animated.Value(250),
      leftPosition: new Animated.Value(0),
    }
  }
  componentDidMount() {
    Animated.parallel([
      Animated.spring(
        this.state.topPosition,
        {
          toValue: 0,
          tension: 8,
          friction: 3,
          delay: 4000,
        }
      ),
      Animated.timing(
        this.state.topPosition,
        {
          toValue: 0,
          duration: 750,
          delay: 4000,
          easing: Easing.elastic(7)
        }
      )
    ]).start()
  }

  render() {
    return (
      <Animated.View style={[{ flex: 1, justifyContent: "center", alignItems: "center" },
                             { top: this.state.topPosition}
      ]}>
        <JaugeFlag/>
      </Animated.View>
    );
  }
}

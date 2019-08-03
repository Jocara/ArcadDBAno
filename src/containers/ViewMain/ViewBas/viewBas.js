import React, { Component } from 'react';
import { Animated, Easing  } from 'react-native';
import JaugeFlag from '../../../components/ViewMain/ViewBas/viewJauge'

export default class ViewBas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fadeValue: new Animated.Value(0)
    }
  }
  componentDidMount() {
      Animated.timing(
        this.state.fadeValue,
        {
          toValue: 1,
          duration: 3000,
          delay: 1000,
        }    
    ).start()
  }

  render() {
    return (
      <Animated.View style={[{ flex: 1, justifyContent: "center", alignItems: "center" },
                             { opacity: this.state.fadeValue}
      ]}>
        <JaugeFlag/>
      </Animated.View>
    );
  }
}

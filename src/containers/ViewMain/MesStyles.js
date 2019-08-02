import React from 'react'
import{ StyleSheet, Dimensions } from 'react-native'
import GLOBAL from '../../../Communs/js/Globales'


const Contenairs = StyleSheet.create({

  containerMain: {
    flex: 1,
    marginTop: 20,
  },
  containerHaut: {
    flex: 2,
  },
  containerData: {
    flex: 12,
  },
  containerJauge: {
    flex: 8,
    borderRadius: 50,
    marginBottom: 20 
  },
  rNSpeedometer: {
    flex: 8,
    width: '100%',
    borderRadius: 50,

  },
})

export default Contenairs

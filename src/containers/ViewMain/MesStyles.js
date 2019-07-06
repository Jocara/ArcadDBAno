import React from 'react'
import{ StyleSheet, Dimensions } from 'react-native'
import GLOBAL from '../../../Communs/js/Globales'


const Contenairs = StyleSheet.create({
//Contenairs
  containerMain: {
    flex: 1,
    marginTop: 20,
//    backgroundColor: GLOBAL.BLEU_ARCAD
  },
  containerHaut: {
    flex: 2,
//    backgroundColor: GLOBAL.JAUNE_ARCAD
  },
  containerData: {
    flex: 12,
//    backgroundColor: GLOBAL.BLEU_ARCAD,
  },
  containerJauge: {
    flex: 8,
    borderRadius: 50,
  },
  rNSpeedometer: {
    flex: 8,
    width: '100%',
//    backgroundColor:'rgba(0, 204, 204, 0.5)',
    borderRadius: 50,

  },
})

export default Contenairs

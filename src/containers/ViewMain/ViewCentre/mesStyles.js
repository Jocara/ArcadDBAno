//Components\js\MesStyles.js

import{ StyleSheet } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

let MarronTrans = 'rgba(88, 41, 00, 0.4)'
const VueData = StyleSheet.create({
  commun:{
    flex: 1,
  },

  vueLigne:{
    flexDirection: 'row',
    flex: 1,
    margin: 10,
    backgroundColor: MarronTrans,
    borderRadius: 50
  },


  vueImage:{
    flexDirection: 'row',
    flex: 1,
    backgroundColor: MarronTrans,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',

  },
  imgElementData: {
    flex: 1,
    height: '100%',
    width: '100%'
    
  },


  vueLibelle: {
    flexDirection: 'row',
    flex: 2,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: MarronTrans,
     borderRadius: 50
  },
  texteLibelle:{
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'GLOBAL.ORANGE_ARCAD',
    textShadowColor: 500,
    textShadowOffset: { width: .5, height: .5 },
    textShadowColor: '#555555',
    textShadowRadius: 50,
    fontSize: RFValue(15),
    flex: 1,
    color: 'white',
    textAlignVertical: 'center',
    marginLeft: 5
  },
  vueValeur: {
    flex: 2,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: 'rgba(227, 117, 20, 0.4)',
     borderRadius: 50
  }
})




export default VueData

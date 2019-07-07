//Components\js\MesStyles.js

import{ StyleSheet, Platform } from 'react-native'
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
    flex: 2.5,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: MarronTrans,
     borderRadius: 50
  },
  texteLibelle:{
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: RFValue(14),
    flex: 1,
    color: 'white',
    textAlignVertical: 'center',
    marginLeft: 3,
  //TODO: Voir si la police est ok sur ios pas pu tester    
    fontFamily:  Platform.OS === 'android' ? 'sans-serif-light' : 'Avenir-Light'
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

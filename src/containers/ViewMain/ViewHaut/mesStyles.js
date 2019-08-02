//src\containers\ViewMain\ViewHaut\MesStyles.js
import{ StyleSheet, Platform } from 'react-native'
import {  RFValue } from "react-native-responsive-fontsize"


const VueHaut = StyleSheet.create({
  vueHaut: {
    flex: 1,
    backgroundColor:'rgba(88, 41, 00, 0.6)',
    flexDirection: 'row',
    borderRadius: 25,
    marginTop: 10,
    opacity:0.8
  },
  caseVideHaut: {
    flex: 1,
  },
  caseTitre: {
    flex: 5,
    borderStyle: 'solid',
    justifyContent: 'center',
  },
  texteTitre:{
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '500',
    color: 'GLOBAL.ORANGE_ARCAD',
    textShadowColor: 500,
    textShadowOffset: { width: 1, height: 1 },
    textShadowColor: '#555555',
    textShadowRadius: 6,
    fontSize: RFValue(25),
    color: 'white',
//TODO: Voir si la police est ok sur ios pas pu tester    
    fontFamily:  Platform.OS === 'android' ? 'sans-serif-light' : 'Avenir-Light'
  },
  caseFermer: {
    flex: 1,
    borderStyle: 'solid',
    justifyContent: 'flex-end',
  },
  imageCroixFermer: {
    flex: 1,
//Si ios taille car BackHandler pas supporté par ios (à vérifier)
    width: Platform.OS === 'ios' ? '0%' : '30%',
    height: Platform.OS === 'ios' ? '0%' : '30%',
    alignSelf: 'center',
  },
})
export default VueHaut

//src\components\ViewMain\ViewBas\viewJauge.js
/*  1- Récup url
    2- Récup les datas du json de l'url
    3- Construit le query avec les dates importées
    4- Pousse le résultat du query dans un tableau
    5- Boucle sur le tableau
      Cumul du total des datas
      Cumul du total des datas anonymisées
    6- Calcul pourcentage
    7- Génère le jauge avec le pourcentage
*/ 


import React, { Component } from 'react'
import { ActivityIndicator , Dimensions, View  } from 'react-native'

import MeStyles from '../../../containers/ViewMain/MesStyles'
import { dateDebut, dateFin } from '../../../../Communs/js/RecupDate'
import GLOBALES from '../../../../Communs/js/Globales'
import RNSpeedometer from 'react-native-speedometer'


var url = GLOBALES.URLS.json
url = url.split('?')[0]
let dimEcranLarg = Dimensions.get( 'window' ).width

export default class JaugeFlag extends Component {
  constructor( props ){
    super( props );
    this.state ={ isLoading: true }   
  }

  async componentDidMount(){
    return await fetch(url)
      .then(( response ) => response.json())
      .then(( responseJson ) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.dataAno,
        });
      })
      .catch(( error ) =>{
       console.error( error );
      });
  }
  render(){
    var nbTotalData = 0
    var nbTotalDataAno = 0
    if( this.state.isLoading ){
        return(
          <View style={{ flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }
    var jsonQuery = require( 'json-query' )
    var helpers = {
      contains: function ( input, arg ) {
      return Array.isArray( input ) && input.some( x => x.includes(arg) )
      }
    }

  var data = this.state.dataSource
  jQTxt = '[*DateLastAnonyme>' + dateDebut + '&' + 'DateLastAnonyme<' + dateFin +']'
  var result = jsonQuery( jQTxt, {
  data: data,
  locals: helpers
  }).value

  result.forEach( function ( element ) {
    nbTotalData = parseInt( element.TotalVolumeData ) + nbTotalData
    nbTotalDataAno = parseInt( element.VolumeDataAnonyme ) + nbTotalDataAno
  });

  pourcentAno = ( 100 * nbTotalDataAno ) / nbTotalData
    return(
        <View style = {[ MeStyles.containerJauge,MeStyles.rNSpeedometer ]}>
        <RNSpeedometer  value =  { pourcentAno } 
                        size = { dimEcranLarg * .8 }/>
      </View>
    );
  }
}
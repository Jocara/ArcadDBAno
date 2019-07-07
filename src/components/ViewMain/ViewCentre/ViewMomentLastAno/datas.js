//src\components\ViewMain\ViewCentre\ViewMomentLastAno\datas.js
/*  1- Récup url
    2- Récup les datas du json de l'url
    3- Construit le query avec les dates importées
    4- Pousse le résultat du query dans un tableau
    5- Boucle sur le tableau
        Récupère la date le plus grande
    6- Récupère le pays du device 
    7- Génère la View avec la date formatée au pays du device
*/ 

import React, { Component } from 'react';
import { ActivityIndicator, Text, View  } from 'react-native';

import MeStyles from '../../../../containers/ViewMain/ViewCentre/mesStyles'
import { dateDebut, dateFin } from '../../../../../Communs/js/RecupDate'
import GLOBALES from '../../../../../Communs/js/Globales'

import * as Localization from 'expo-localization'
import moment from 'moment'
import 'moment/min/locales' //Contient les formats date et heure (moment)

var url = GLOBALES.URLS.json
url = url.split('?')[0]

export default class MomentLastAno extends Component {
  constructor( props ){
    super( props );
    this.state ={ isLoading: true }   
  }

  async componentDidMount(){
    return await fetch( url )
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
    var momentLastAno = new Date()
    momentLastAno = '2000-01-01 00:00'
    var momentLastAnoRef = new Date()
    if(this.state.isLoading){
      return(
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator/>
        </View>
      )
    }
    var jsonQuery = require( 'json-query' )
    var helpers = {
      contains: function (input, arg) {
      return Array.isArray( input ) && input.some( x => x.includes(arg) )
      }
    }
  var data = this.state.dataSource
  jQTxt = '[*DateLastAnonyme>' + dateDebut + '&' + 'DateLastAnonyme<' + dateFin +']'
  var result = jsonQuery( jQTxt, {
  data: data,
  locals: helpers
  }).value

  result.forEach(function ( element ) {
     momentLastAnoRef = element.DateLastAnonyme
    if ( momentLastAnoRef > momentLastAno ) {
        momentLastAno = momentLastAnoRef
    } 
  });

  paysDevice = Localization.locale.split('-')[0]
  moment.locale( paysDevice ) // positionne moment sur le pays du device

  /*formats dispos ex: français
      LT : 'HH:mm',
      LTS : 'HH:mm:ss',
      L : 'DD/MM/YYYY',
      LL : 'D MMMM YYYY',
      LLL : 'D MMMM YYYY HH:mm',
      LLLL : 'dddd D MMMM YYYY HH:mm'
      récupérer moment/min/locales

  */
  dateFormatee = moment ( momentLastAno ).format( 'LLL' ) 
  return(
    <View style = { MeStyles.vueValeur }>
      <Text style = { MeStyles.texteLibelle }>
        { dateFormatee }
      </Text>
    </View>
  );
  }
}


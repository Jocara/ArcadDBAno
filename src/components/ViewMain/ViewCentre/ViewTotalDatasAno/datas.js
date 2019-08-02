//src\components\ViewMain\ViewCentre\ViewTotalDatasAno\datas.js
/*  1- Récup url
    2- Récup les datas du json de l'url
    3- Construit le query avec les dates importées
    4- Pousse le résultat du query dans un tableau
    5 Boucle sur le tableau
        Cumul du total des datas anonymisées
*/ 
import React from 'react';
import { ActivityIndicator, Text, View  } from 'react-native';
import MeStyles from '../../../../containers/ViewMain/ViewCentre/mesStyles'
import {dateDebut, dateFin } from '../../../../../Communs/js/RecupDate'
import GLOBALES from '../../../../../Communs/js/Globales'

var url = GLOBALES.URLS.json

url = url.split('?')[0]

export default class NbTotalDataAno extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}   
  }

  async componentDidMount(){
    return await fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.dataAno,
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render(){
    var nbTotalDataAno = 0
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    var jsonQuery = require('json-query')
    var helpers = {
      contains: function (input, arg) {
      return Array.isArray(input) && input.some(x => x.includes(arg))
      }
    }
  var data = this.state.dataSource
  jQTxt = '[*DateLastAnonyme>' + dateDebut + '&' + 'DateLastAnonyme<' + dateFin +']'
  var result = jsonQuery(jQTxt, {
  data: data,
  locals: helpers
  }).value

  result.forEach(function (element) {
   nbTotalDataAno = parseInt(element.VolumeDataAnonyme) + nbTotalDataAno
  });
    return(
      <View style = {MeStyles.vueValeur}>
        <Text style = {MeStyles.texteLibelle}>
          {nbTotalDataAno}
        </Text>
      </View>
    );
  }
}


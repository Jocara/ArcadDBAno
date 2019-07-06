import React from 'react';
import { ActivityIndicator, Text, View  } from 'react-native';
import MeStyles from '../../../../containers/ViewMain/ViewCentre/mesStyles'
import {dateDebut, dateFin } from '../../../../../Communs/js/RecupDate'
import GLOBALES from '../../../../../Communs/js/Globales'

var url = GLOBALES.URLS.json

url = url.split('?')[0]


export default class NbTotalData extends React.Component {

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
    var nbTotalData = 0
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
  //console.log(result)

  result.forEach(function (element, index) {
   nbTotalData = parseInt(element.TotalVolumeData) + nbTotalData
  });
    return(
      <View style = {MeStyles.vueValeur}>
        <Text style = {MeStyles.texteLibelle}>
          {nbTotalData}
        </Text>
      </View>
    );
  }
}


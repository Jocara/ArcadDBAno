import React from 'react';
import { ActivityIndicator , Dimensions, Text, View  } from 'react-native';
import MeStyles from '../../../containers/ViewMain/MesStyles'
import {dateDebut, dateFin } from '../../../../Communs/js/RecupDate'
import GLOBALES from '../../../../Communs/js/Globales'
import RNSpeedometer from 'react-native-speedometer'


var url = GLOBALES.URLS.json
url = url.split('?')[0]
let dimEcranLarg = Dimensions.get('window').width

export default class JaugeFlag extends React.Component {

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
    var nbTotalDataAnoy = 0
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
    console.log('index:', index, 'valeur:', element.id);
    var Madate = element.DateLastAnonyme
    console.log(Madate)
    nbTotalData = parseInt(element.TotalVolumeData) + nbTotalData
    nbTotalDataAnoy = parseInt(element.VolumeDataAnonyme) + nbTotalDataAnoy
    console.log(nbTotalData);
  });
  var pourcentAno = (100 * nbTotalDataAnoy )/nbTotalData
  console.log(result)
    return(
        <View style = { [MeStyles.containerJauge,MeStyles.rNSpeedometer]}>
        <RNSpeedometer  value=  {pourcentAno} 
                        size={dimEcranLarg * .7}/>
      </View>
    );
  }
}


import React from 'react';
import { ActivityIndicator, Text, View  } from 'react-native';
import MeStyles from '../../../../containers/ViewMain/ViewCentre/mesStyles'
import GLOBALES from '../../../../../Communs/js/Globales'

var url = GLOBALES.URLS.xml

export default class NbProjets extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}   
  }

 async componentDidMount(){
    const parseString = require('react-native-xml2js').parseString;
    return await fetch(url)
      .then((response) => response.text())
      .then((response) => {

        console.log(response)
        var XMLParser = require('react-xml-parser');
        var xml = new XMLParser().parseFromString(response);
        this.setState({
          isLoading: false,
          NbProjets: xml.getElementsByTagName('nombre')[0].value,
        });
      })
      //TODO: Voir si il n'y a qu'une suele ligne dnas le XML ou s'il faut faire une requ
      .catch((error) =>{
        console.error(error);
      });
  }
  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

 
  //console.log(result)

    return(
      <View style = {MeStyles.vueValeur}>
        <Text style = {MeStyles.texteLibelle}>
          {this.state.NbProjets}
        </Text>
      </View>
    );
  }
}


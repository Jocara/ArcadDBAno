//src\components\ViewMain\ViewCentre\ViewNbProjets\datas.js
/*  1- Récup url (XMl)
    2- Récup les datas de l'XML de l'url
    2- Génère la View avec la valeur de la balise 'NbProjets'
*/ 
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
    return await fetch(url)
      .then((response) => response.text())
      .then((response) => {
        var XMLParser = require('react-xml-parser');
        var xml = new XMLParser().parseFromString(response);
        this.setState({
          isLoading: false,
          NbProjets: xml.getElementsByTagName('nombre')[0].value,
        });
      })
      //TODO: Voir si il n'y a qu'une seule ligne dans le XML ou s'il faut faire une requête
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
    return(
      <View style = {MeStyles.vueValeur}>
        <Text style = {MeStyles.texteLibelle}>
          {this.state.NbProjets}
        </Text>
      </View>
    );
  }
}


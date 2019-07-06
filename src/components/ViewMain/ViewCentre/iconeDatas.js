import React, { Component } from 'react';
import { View, Image } from 'react-native';
import MesStyles from '../../../containers/ViewMain/ViewCentre/mesStyles'

function IconeData(type){

  switch(type){
    case 'NbProjets': { 
      return (
        <View   style = {MesStyles.vueImage}>
          <Image  source = {require('../ViewCentre/Images/IconeProjet.png')}
                style = {[MesStyles.imgElementData]}>
          </Image>
        </View>  
          )
    }
    case 'TotalDatas': { 
      return (
        <View   style = {MesStyles.vueImage}>
          <Image  source = {require('../ViewCentre/Images/IconeData.png')}
                style = {[MesStyles.imgElementData]}>
          </Image>
        </View>  
          )
    }  
    case 'TotalDatasAno': { 
      return (
        <View   style = {MesStyles.vueImage}>
          <Image  source = {require('../ViewCentre/Images/IconeAnonyme.png')}
                style = {[MesStyles.imgElementData]}>
          </Image>
        </View>  
          )
    }  
    case 'MomentLastAno': { 
      return (
        <View   style = {MesStyles.vueImage}>
          <Image  source = {require('../ViewCentre/Images/IconeDateHeure.png')}
                style = {[MesStyles.imgElementData]}>
          </Image>
        </View>  
          )
    }        
  }
}
export default IconeData

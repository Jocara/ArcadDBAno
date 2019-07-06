import { Alert, BackHandler }from 'react-native'
import moment from 'moment'

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import {en , fr} from './Languages'
import GLOBALES from './Globales'

// extrait les paramètres de l'URL
var parametres = GLOBALES.URLS.json.split('?')[1]
//extrait le paramètre date de début
var paramDateDebut = parametres.split('&')[0]        
var dateDebut = paramDateDebut.split('=')[1]  
//extrait le paramètre date de fin
var paramDateFin = parametres.split('&')[1] 
var dateFin = paramDateFin.split('=')[1] 

var msgPbDate
 
RetourValidation()

function RetourValidation() {
    dateDebut =  moment(dateDebut).format("YYYY-MM-DD HH:mm")
    dateFin =  moment(dateFin).format("YYYY-MM-DD HH:mm")
   
    i18n.translations = { en ,fr };
    // si ce n'est pas un téléphone français alors language anglais
    if (Localization.locale.split('-')[0] != 'fr') {
        i18n.locale =  'en'
    }else{
        i18n.locale =  'fr'
    }
    // si les dates ne sont pas validées, alert et out
    if (!ValidationDate(dateDebut,dateFin )){
        Alert.alert(
            i18n.t('recupDate.titreAlert'),
            msgPbDate,
            [
            {text: i18n.t('recupDate.btnQuit'), onPress: () =>
                BackHandler.exitApp() , style: 'cancel'},
            ]
        )
    }
}

//Validation des dates du json query
function ValidationDate(paramDateDebut, paramDateFin) {
    // Test format date de fin
    if (!moment(paramDateFin).isValid ()){
        msgPbDate = i18n.t('recupDate.msgPbDate1')
        return  false 
    }else{
        // Test format date de début
        if (!moment(paramDateDebut).isValid ()){
            msgPbDate = i18n.t('recupDate.msgPbDate2')
            return  false 
        }else{
            // Test date Fin < Date début
            if ( paramDateFin <= paramDateDebut ) {
                msgPbDate = i18n.t('recupDate.msgPbDate3')
                return false 
            }else{
                return true
            }
        }
    } 
}

export var dateDebut   
export var dateFin 
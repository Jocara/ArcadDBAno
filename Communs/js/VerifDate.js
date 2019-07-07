//Communs\js\VerifDate.js
//Dates début et fin pour query
import { dateDebut, dateFin } from './RecupDate'
import { isDate } from 'util'


function ValidationDate() {

    if ( dateFin <= dateDebut ) {
        msgPbDate = 'Problème dans les dates, date de fin supérieure à la date de fin'
        return false 
    }

    if ( dateDebut = dateFin ) {
        msgPbDate = 'Problème dans les dates, elles sont égales'
        return  false 
    }

    if ( not ( isDate ( dateDebut ))){
        msgPbDate = 'Problème dans les dates,le format de la date de début est invalide'
        return  false 
    }

    if ( not ( isDate ( dateFin ))){
        msgPbDate = 'Problème dans les dates,le format de la date de fin est invalide'
        return  false 
    }

}





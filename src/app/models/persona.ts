import { Reference, DocumentReference } from '@angular/fire/firestore';
import { carrera } from './carrera';

export interface persona{
    id?:string
    //alumno
    dni?:string
    apellido?:string
    nombre?:string
    registro?:string
    carrera?:DocumentReference
    //beca
    num_beca?:string
    cantidadBecas?:string
    mes?:string
    
}
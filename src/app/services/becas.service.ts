import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from '@angular/fire/firestore';

//models
import {beca} from '../models/beca';
import {persona} from '../models/persona';


import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BecasService {
  //becasDeFotocopias
  becasCollection:AngularFirestoreCollection;
  becas:Observable<beca[]>;
  becasDoc:beca;

  //Personas
  personsCollection:AngularFirestoreCollection;
  personas:Observable<persona[]>;
  personaDoc:persona;

  constructor(private db:AngularFirestore) {
    //this.becas= this.db.collection('becasDeFotocopias').valueChanges();

    //Esto se hace para poder traer el id del objeto
    this.becasCollection = this.db.collection('becasDeFotocopias');
    this.becas=this.becasCollection.snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
       const data =  a.payload.doc.data() as beca;
       data.id = a.payload.doc.id;
       return data;
      })
    }));

    this.personsCollection = this.db.collection('Personas');

    this.personas = this.personsCollection.snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
         const data= a.payload.doc.data() as persona
         data.id = a.payload.doc.id;
         return data
      })
    }))
   }

   getBecas(){
     return this.becas;
   }
}

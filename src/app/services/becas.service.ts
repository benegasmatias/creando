import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

//models
import { beca } from '../models/beca';
import { persona } from '../models/persona';
import { carrera } from '../models/carrera';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BecasService {
  //becasDeFotocopias
  becasCollection: AngularFirestoreCollection<beca>;
  becas: Observable<beca[]>;
  becasDoc: AngularFirestoreDocument<beca>;

  //Personas
  personsCollection: AngularFirestoreCollection<persona>;
  personas: Observable<persona[]>;
  personaDoc: AngularFirestoreDocument<persona>;

  //carreras
  carrerasCollection: AngularFirestoreCollection<carrera>;
  carreras: Observable<carrera[]>;
  carreraDoc: AngularFirestoreDocument<carrera>;

  constructor(private db: AngularFirestore) {
    //this.becas= this.db.collection('becasDeFotocopias').valueChanges();

    //Esto se hace para poder traer el id del objeto
    this.becasCollection = this.db.collection('becasDeFotocopias');

    this.becas = this.becasCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as beca;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
    //Personas id

    this.personsCollection = this.db.collection('Personas');

    this.personas = this.personsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as persona
        data.id = a.payload.doc.id;
        return data
      })
    }))
    //carreras

    this.carrerasCollection = this.db.collection('Carreras');
    //snapshotChanges() trae una nueva actualizacion de los datos cuando cambien
    //pipe metodo que se utiliza para poder procesar los datos cada vez que vienen
    // map aplica una funcion a todos los componentes del arreglo.
    this.carreras = this.carrerasCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as carrera
        data.id = a.payload.doc.id;
        return data
      })
    }))

  }





  getBecas() {
    return this.becas;
  }
  getPersona() {
    return this.personas;
  }
  getCarrera() {
    return this.carreras;
  }


  deleteBeca(beca: beca) {
    //busca el documento
    this.becasDoc = this.db.doc(`becas/${beca.id}`);
    //borra la beca segun su id
    this.becasDoc.delete();
  }

  addBeca(beca: beca) {
    this.becasCollection.add(beca);
  }
  addPersona(persona:persona){
    this.personsCollection.add(persona);
  }
}

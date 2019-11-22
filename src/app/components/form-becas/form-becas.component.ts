import { Component, OnInit } from '@angular/core';
import { BecasService } from '../../services/becas.service';

import { FormControl, FormGroup } from '@angular/forms';


//models
import { persona } from '../../models/persona'


@Component({
  selector: 'app-form-becas',
  templateUrl: './form-becas.component.html',
  styleUrls: ['./form-becas.component.css']
})
export class FormBecasComponent implements OnInit {

  //carreras que vienen de firebase
  carreras = [];
  //estudiante al que se le entrega la beca. objeto tipo persona
  estudiante: persona = {};

  becasDisp;

  formEntregaBeca: FormGroup;

  constructor(private becaService: BecasService) { }

  ngOnInit() {

   this.becasDisp = this.becaService.becaPorMes(this.returnMes());
    //creando validador de formulario
    this.formEntregaBeca = new FormGroup({
      'apellido': new FormControl(),
      'nombre': new FormControl(),
      'dni': new FormControl(),
      'numero': new FormControl(),
      'carrera': new FormControl(),
      'registro': new FormControl()
    })
    //cargar el arreglo carrera
    this.becaService.getCarrera().subscribe((data) => { this.carreras = data });
  }

  entregarBeca() {
    this.estudiante.mes = this.returnMes();
    this.becaService.addPersona(this.estudiante);
    this.estudiante = {}
  }

  returnMes() {
    var d = new Date();
    var month = new Array();
    month[0] = "Enero";
    month[1] = "Febrero";
    month[2] = "Marzo";
    month[3] = "April";
    month[4] = "Mayo";
    month[5] = "Junio";
    month[6] = "Julio";
    month[7] = "Agosto";
    month[8] = "Septiembre";
    month[9] = "Octubre";
    month[10] = "Noviembre";
    month[11] = "Diciembre";
    var n = month[d.getMonth()];

    return n;
  }


}

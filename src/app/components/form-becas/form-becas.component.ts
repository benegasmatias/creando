import { Component, OnInit } from '@angular/core';
import {BecasService} from '../../services/becas.service'
import { persona } from 'src/app/models/persona';

@Component({
  selector: 'app-form-becas',
  templateUrl: './form-becas.component.html',
  styleUrls: ['./form-becas.component.css']
})
export class FormBecasComponent implements OnInit {

  carreras = [];
  constructor(private becaService:BecasService) { }

  ngOnInit() {
    //cargar el arreglo carrera
    this.becaService.getCarrera().subscribe((data)=>{this.carreras= data});
  }

  addPersona(persona:persona){
    this.becaService.addPersona(persona);
  }

}

import { Component, OnInit } from '@angular/core';
//service
import {BecasService} from '../../services/becas.service';
//models
import {persona} from '../../models/persona'

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent implements OnInit {
  carreras = [];
  constructor(private becaService:BecasService) { }

  ngOnInit() {
    this.becaService.getCarrera().subscribe((data)=>{this.carreras= data});
  }

  addPersona(persona:persona){
    this.becaService.addPersona(persona);
  }


}

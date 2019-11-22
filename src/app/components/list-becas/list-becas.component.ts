import { Component, OnInit} from '@angular/core';
import {BecasService} from '../../services/becas.service'

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-becas',
  templateUrl: './list-becas.component.html',
  styleUrls: ['./list-becas.component.css']
})
export class ListBecasComponent implements OnInit {
  personas=[];

  constructor(private becasService:BecasService) { }

  ngOnInit() {
 this.becasService.getPersona().subscribe(
      (data)=>{
        console.log(data)
        this.personas = data}
    )
    
  }


}

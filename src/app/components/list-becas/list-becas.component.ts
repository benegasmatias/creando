import { Component, OnInit } from '@angular/core';
import {BecasService} from '../../services/becas.service'

@Component({
  selector: 'app-list-becas',
  templateUrl: './list-becas.component.html',
  styleUrls: ['./list-becas.component.css']
})
export class ListBecasComponent implements OnInit {
  becas=[];
  constructor(private becasService:BecasService) { }

  ngOnInit() {
    this.becasService.getBecas().subscribe(
      (data)=>{
        console.log(data)
        this.becas = data}
    )
    
  }

}

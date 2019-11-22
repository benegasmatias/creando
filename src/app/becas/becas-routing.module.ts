import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import {NavegadorComponent} from '../navegador/navegador.component';
import {FormBecasComponent} from '../components/form-becas/form-becas.component';
import {ListBecasComponent} from '../components/list-becas/list-becas.component';



const routes: Routes = [
 {
   path:'',
   component:NavegadorComponent,
   children:[
    {
      path:'becasForm',
      component:FormBecasComponent
    },
    {
      path:'becasList',
      component: ListBecasComponent
    }
   ]
 }
 
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BecasRoutingModule { }

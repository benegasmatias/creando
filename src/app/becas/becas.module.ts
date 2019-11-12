import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BecasRoutingModule } from './becas-routing.module';

//components
import { NavegadorComponent } from '../navegador/navegador.component';
import { FormBecasComponent } from '../components/form-becas/form-becas.component';
import { ListBecasComponent } from '../components/list-becas/list-becas.component';

//material
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    NavegadorComponent,
    FormBecasComponent,
    ListBecasComponent],
  imports: [
    CommonModule,
    BecasRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  bootstrap: [NavegadorComponent]
})
export class BecasModule { }

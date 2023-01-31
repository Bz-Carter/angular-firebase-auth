import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure.component';
import { DahsboardComponent } from './dahsboard/dahsboard.component';


@NgModule({
  declarations: [
    SecureComponent,
    DahsboardComponent
  ],
  imports: [
    CommonModule,
    SecureRoutingModule
  ]
})
export class SecureModule { }

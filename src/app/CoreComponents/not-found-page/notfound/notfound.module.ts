import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NOTFoundRoutingModule } from './notfound-routing.module';
import { NotFoundPageComponent } from '../not-found-page.component';


@NgModule({
  declarations: [
    // NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    NOTFoundRoutingModule
  ]
})
export class NOTFoundModule { }

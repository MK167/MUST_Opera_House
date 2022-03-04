import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from '../not-found-page.component';

const routes: Routes = [
  {
    path : '' , redirectTo: 'Not-Found-Page', pathMatch:' full'
  },
  {
    path: 'Not-Found-Page', component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NOTFoundRoutingModule { }

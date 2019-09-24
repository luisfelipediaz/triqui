import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TriquiComponent } from './triqui/triqui.component';


const routes: Routes = [
  {
    path: 'triqui',
    component: TriquiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

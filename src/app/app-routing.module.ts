import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TabledisplayComponent} from './components/tabledisplay/tabledisplay.component';


const routes: Routes = [
  {path:'', component:TabledisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSuperheroesComponent } from './super-heroes/all-superheroes/all-superheroes.component';
import { AddSuperheroesComponent } from './super-heroes/add-superheroes/add-superheroes.component';

const routes: Routes = [
  {
    path:'',
    component: AllSuperheroesComponent
  },
  {
    path:'add',
    component: AddSuperheroesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

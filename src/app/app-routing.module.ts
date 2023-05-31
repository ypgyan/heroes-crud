import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSuperheroesComponent } from './super-heroes/all-superheroes/all-superheroes.component';

const routes: Routes = [{
  path:'',
  component: AllSuperheroesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

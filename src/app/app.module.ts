import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AllSuperheroesComponent } from './super-heroes/all-superheroes/all-superheroes.component';
import { HttpClientModule } from '@angular/common/http';
import { AddSuperheroesComponent } from './super-heroes/add-superheroes/add-superheroes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditSuperheroesComponent } from './super-heroes/edit-superheroes/edit-superheroes.component';
import { DeleteDialogSuperheroesComponent } from './super-heroes/delete-dialog-superheroes/delete-dialog-superheroes.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from "@angular/material/icon";
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    AllSuperheroesComponent,
    AddSuperheroesComponent,
    EditSuperheroesComponent,
    DeleteDialogSuperheroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

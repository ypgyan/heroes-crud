import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SuperHeroes } from '../super-heroes';
import { SuperHeroesService } from '../super-heroes.service';

@Component({
  selector: 'app-add-superheroes',
  templateUrl: './add-superheroes.component.html',
  styleUrls: ['./add-superheroes.component.css'],
})
export class AddSuperheroesComponent {
  constructor(
    private fb: FormBuilder,
    private superHeroService: SuperHeroesService,
    private router: Router
  ) { }

  addSuperHeroForm = this.fb.group({
    name: [''],
    imageUrl: [''],
    franchise: [''],
    gender: [''],
  });

  noImage = 'add-preview-image.png';

  create() {
    this.superHeroService
      .add(this.addSuperHeroForm.value as SuperHeroes)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}

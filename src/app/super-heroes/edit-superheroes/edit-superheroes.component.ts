import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SuperHeroes } from '../super-heroes';
import { SuperHeroesService } from '../super-heroes.service';

@Component({
  selector: 'app-edit-superheroes',
  templateUrl: './edit-superheroes.component.html',
  styleUrls: ['./edit-superheroes.component.css'],
})
export class EditSuperheroesComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private superHeroeService: SuperHeroesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }

  noImage =
    'previewImages.png';

  updateSuperHeroForm = this.fb.group({
    id: [0],
    name: [''],
    imageUrl: [''],
    franchise: [''],
    gender: [''],
  });

  getById(id: number) {
    this.superHeroeService.getById(id).subscribe((data) => {
      this.updateSuperHeroForm.setValue(data);
    });
  }

  update() {
    this.superHeroeService.update((this.updateSuperHeroForm.value as SuperHeroes))
    .subscribe(() => {
      this.router.navigate(["/"]);
    })
  }
}

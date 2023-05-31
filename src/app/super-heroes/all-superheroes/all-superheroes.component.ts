import { Component, OnInit } from '@angular/core';
import { SuperHeroes } from '../super-heroes';
import { SuperHeroesService } from '../super-heroes.service';

@Component({
  selector: 'app-all-superheroes',
  templateUrl: './all-superheroes.component.html',
  styleUrls: ['./all-superheroes.component.css'],
})
export class AllSuperheroesComponent implements OnInit {
  allSuperHeroes: SuperHeroes[] = [];

  constructor(private superHeroesService: SuperHeroesService) {}

  ngOnInit(): void {
    this.getApi();
  }

  getApi() {
    this.superHeroesService.get().subscribe((response) => {
      this.allSuperHeroes = response;
    });
  }
}

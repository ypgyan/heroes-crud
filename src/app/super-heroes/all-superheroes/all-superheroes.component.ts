import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogSuperheroesComponent } from '../delete-dialog-superheroes/delete-dialog-superheroes.component';
import { SuperHeroes } from '../super-heroes';
import { SuperHeroesService } from '../super-heroes.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-all-superheroes',
  templateUrl: './all-superheroes.component.html',
  styleUrls: ['./all-superheroes.component.css'],
})
export class AllSuperheroesComponent implements OnInit {
  sortingControl = new FormControl('');
  searchControl = new FormControl('');
  allSuperHeroes: SuperHeroes[] = [];
  totalRecords: number = 0;
  pageIndex = 0;
  pageSize = 5;

  constructor(
    private superHeroesService: SuperHeroesService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getApi('', '', '');
    this.sortingControl.valueChanges.subscribe((value) => {
      if (value) {
        let sortResult = this.doSorting(value);
        this.pageIndex = 0;
        this.pageSize = 5;
        this.getApi(sortResult.sortColumn, sortResult.sortType, '');
      }
    });
  }

  doSorting(value: string) {
    let sortColumn: string = '';
    let sortType: string = '';
    if (value.toLowerCase() === 'id-by-desc') {
      sortColumn = 'id';
      sortType = 'desc';
    } else if (value.toLowerCase() === 'id-by-asc') {
      sortColumn = 'id';
      sortType = 'asc';
    } else if (value.toLowerCase() === 'franchise-by-desc') {
      sortColumn = 'franchise';
      sortType = 'desc';
    } else if (value.toLowerCase() === 'franchise-by-asc') {
      sortColumn = 'franchise';
      sortType = 'asc';
    } else if (value.toLowerCase() === 'gender-by-desc') {
      sortColumn = 'gender';
      sortType = 'desc';
    } else if (value.toLowerCase() === 'gender-by-asc') {
      sortColumn = 'gender';
      sortType = 'asc';
    }
    return {
      sortColumn,
      sortType,
    };
  }

  textSearch() {
    let sortResult = this.doSorting(this.sortingControl.value ?? '');
    this.pageIndex = 0;
    this.pageSize = 5;
    this.getApi(
      sortResult.sortColumn,
      sortResult.sortType,
      this.searchControl.value ?? ''
    );
  }

  getApi(sortColumn: string, sortType: string, search: string) {
    this.superHeroesService
      .get(sortColumn, sortType, search, this.pageIndex + 1, this.pageSize)
      .subscribe((response) => {
        this.allSuperHeroes = response.body as SuperHeroes[];
        this.totalRecords = response.headers.get('X-Total-Count')
          ? Number(response.headers.get('X-Total-Count'))
          : 0;
      });
  }

  deleteItem(id: number) {
    const dialogRef = this.dialog.open(DeleteDialogSuperheroesComponent, {
      width: '250px',
      data: { id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.allSuperHeroes = this.allSuperHeroes.filter((_) => _.id !== id);
      }
    });
  }

  handlePageEvent(e: PageEvent) {

    this.pageIndex = e.pageIndex ;
    this.pageSize = e.pageSize;
    let sortResult = this.doSorting(this.sortingControl.value ?? '');
    this.getApi(
      sortResult.sortColumn,
      sortResult.sortType,
      this.searchControl.value ?? ''
    );
  }
}

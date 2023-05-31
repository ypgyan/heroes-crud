import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SuperHeroesService } from '../super-heroes.service';

@Component({
  selector: 'app-delete-dialog-superheroes',
  templateUrl: './delete-dialog-superheroes.component.html',
  styleUrls: ['./delete-dialog-superheroes.component.css'],
})
export class DeleteDialogSuperheroesComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogSuperheroesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private superHeroesService: SuperHeroesService
  ) {}

  confirmDelete() {
    this.superHeroesService.delete(this.data.id).subscribe(() => {
      this.dialogRef.close(this.data.id);
    });
  }
}

import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error-optional',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './error-optional.component.html',
  styleUrl: './error-optional.component.scss'
})
export class ErrorOptionalComponent {

  constructor(public dialogRef: MatDialogRef<ErrorOptionalComponent>, @Inject(MAT_DIALOG_DATA) public data: string,){

  }

  // Capturando resultado true ou false dos botões.
  confirmaDelete(resultado: boolean): void{
    this.dialogRef.close(resultado);
  }

}

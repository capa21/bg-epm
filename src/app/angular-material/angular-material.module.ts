import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatTableModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule
  ],
  exports: [MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatTableModule]
})
export class AngularMaterialModule { }

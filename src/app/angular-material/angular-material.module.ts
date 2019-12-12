import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatTableModule
} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatTableModule,MatPaginatorModule]
})
export class AngularMaterialModule { }

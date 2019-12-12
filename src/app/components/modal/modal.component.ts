import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit{

  myDataArray: object[] = [];
  displayedColumns: string[] = [];
  selectRow: any;
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
      this.myDataArray = this.data.dataTable;
      this.dataSource = new MatTableDataSource(this.myDataArray);
      this.displayedColumns = this.data.nombresCampos;

   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.applyFilter(this.data.valorBusqueda);
  }

  getRecordFromTable(row: any) {
    this.selectRow = row;
    console.log(this.selectRow);
    this.data.retorno = this.selectRow;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { element } from 'protractor';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {

  arrayData: object[] = [];
  arrayNombresCampos: string[] = [];
  arrayNumeroCamposAtributos: number[] = [];
  valorBusqueda = '';
  idSeleccionado = '';


  attributes = [
    {
      fullname: {
        Value: 'Prueba11 Praa'
      },
      epm_clidentificationnumber: {
        Value: '12456789'
      },
      contactid: {
          Value: '97606120-297a-e811-9143-000d3a1fd324'
      }
    },
    {
      fullname: {
        Value: 'Prueba20 Prae'
      },
      epm_clidentificationnumber: {
        Value: '22222222'
      },
      contactid: {
          Value: '97606120-307a-e811-9143-000d3a1fd324'
      },
      address: {
          Value: 'cll 37a # 88-68'
      }
    },
    {
      fullname: {
        Value: 'Prueba12 Prae'
      },
      epm_clidentificationnumber: {
        Value: '12456789'
      },
      contactid: {
          Value: '97606120-297a-e811-9143-000d3a1fd324'
      }
    },
    {
      fullname: {
        Value: 'Prueba13 Prai'
      },
      epm_clidentificationnumber: {
        Value: '12456789'
      },
      contactid: {
          Value: '97606120-297a-e811-9143-000d3a1fd324'
      }
    },
    {
      fullname: {
        Value: 'Prueba14 Prai'
      },
      epm_clidentificationnumber: {
        Value: '12456765'
      }
    },
    {
      fullname: {
        Value: 'Prueba15 Prai'
      },
      epm_clidentificationnumber: {
        Value: '12456744'
      }
    }
  ];

  constructor(
    private dataservice: DataService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    //this.getData();
    this.pruebaData();
  }

  getData() {
    const arrayAtributos = this.dataservice.getDataFiltrada();
    arrayAtributos.forEach(element => {
      const atributo = {};
      this.arrayNombresCampos.forEach(item => {
        console.log("element", element);
        console.log("item",item);
        console.log(eval(`element.${item}.Value`));
        //atributo[item] = eval(`atributoElement.${item}.Value`);
      });
      this.arrayData.push(atributo);
    });
    console.log(this.arrayData);

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '50%',
      data: {valorBusqueda: this.valorBusqueda, dataTable: this.arrayData, nombresCampos: this.arrayNombresCampos,  animal: this.idSeleccionado}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.idSeleccionado = result;
    });
  }

  pruebaData() {
    const arrayAtributos: object[] = [];
    this.attributes.forEach(element => {
      const nombresCampos = Object.keys(element);
      this.arrayNumeroCamposAtributos.push(Object.keys(element).length);
      const atributo = {};

      nombresCampos.forEach(item => {
        atributo[item] = eval(`element.${item}.Value`);
      });
      arrayAtributos.push(atributo);
    });
    this.arrayData = arrayAtributos;
    console.log("arrayNumeroCamposAtributos", this.arrayNumeroCamposAtributos);
    this.arrayNombresCampos = this.obtenerArrayNombresCampos();
    console.log("this.arrayNombresCampos", this.arrayNombresCampos);
  }

  obtenerArrayNombresCampos() {
    let indexMayor = 0;
    let elementoMayor = this.arrayNumeroCamposAtributos[0];
    for (let index = 1; index < this.arrayNumeroCamposAtributos.length; index++) {
      if (this.arrayNumeroCamposAtributos[index] > elementoMayor) {
        elementoMayor = this.arrayNumeroCamposAtributos[index];
        indexMayor = index;
      }
    }
    console.log("indexMayor", indexMayor);
    return Object.keys(this.attributes[indexMayor]);
  }




}

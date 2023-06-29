import { Component, OnInit } from '@angular/core';
import { Socio } from 'src/app/models/socio';
import { SocioService } from 'src/app/services/socio.service';
import Swal from 'sweetalert2';

import * as pdfMake from  'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-listar-socios',
  templateUrl: './listar-socios.component.html',
  styleUrls: ['./listar-socios.component.css']
})
export class ListarSociosComponent {
    listSocios: Socio[] = [];
    elementos: number = 0;
    constructor(private _socioService: SocioService) {

    }
    ngOnInit(): void {
      
      this.obtenerSocios();

    }
    obtenerSocios(){
      this._socioService.getSocio().subscribe(data => {
        console.log(data);
        this.listSocios = data;
        this.elementos = this.listSocios.length;
      })
    }

    eliminarSocio(id: any){
      this._socioService.deleteSocio(id).subscribe(data => {

        Swal.fire({
          title: 'Eliminacion de Socio',
          text: "¿Desea eliminar el socio?",
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            console.log(data);
            this.obtenerSocios();
            this.elementos = this.listSocios.length;
          }
        })
      })
    }
  }

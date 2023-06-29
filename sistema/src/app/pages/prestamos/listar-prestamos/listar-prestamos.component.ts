import { Component, OnInit } from '@angular/core';
import { Prestamos } from 'src/app/models/prestamos';
import { PrestamosService } from 'src/app/services/prestamos.service';
import Swal from 'sweetalert2';
import * as pdfMake from  'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-listar-prestamos',
  templateUrl: './listar-prestamos.component.html',
  styleUrls: ['./listar-prestamos.component.css']
})
export class ListarPrestamosComponent implements OnInit{
  
  listPrestamos: Prestamos[] = [];
  elementos: number = 0;

  constructor(private _prestamosService: PrestamosService) {

  }
  ngOnInit(): void {
    
    this.obtenerPrestamos();

  }

  openPdfTables() {
    const tableHeader = [
      { text: 'pelicula', bold: true },
      { text: 'socio', bold: true },
      { text: 'fechaPrestamo', bold: true },
      { text: 'fechaDevolucion', bold: true }
    ];
  
    const tableBody = this.listPrestamos.map((prestamo) => [
      prestamo.pelicula,
      prestamo.socio,
      prestamo.fechaPrestamo,
      prestamo.fechaDevolucion
    ]);
  
    const documentDefinition: any = {
      content: [
        {
          text: 'Prestamos',
          style: 'title',
          alignment: 'center'  // Alineación centrada
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 100, '*'],
            body: [tableHeader, ...tableBody]
          }
        }
      ],
      styles: {
        title: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] }
      }
    };
  
    pdfMake.createPdf(documentDefinition).open();
  }
  
  
  
  
  obtenerPrestamos(){
    this._prestamosService.getPrestamos().subscribe(data => {
      console.log(data);
      this.listPrestamos = data;
      this.elementos = this.listPrestamos.length;
    })
  }

  eliminarPrestamos(id: any){
    this._prestamosService.deletePrestamo(id).subscribe(data => {

      Swal.fire({
        title: 'Eliminacion de Prestamo',
        text: "¿Desea eliminar el prestamo?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(data);
          this.obtenerPrestamos();
          this.elementos = this.listPrestamos.length;
        }
      })
    })
  }

}
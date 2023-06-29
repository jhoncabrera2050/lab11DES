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
    
    const documentDefinition: any = {
      content: [
        {
          table: {
            
            headerRows: 1,
            widths: ['*', 'auto', 100, '*'],

            body: [
              [{ text: 'Nombre', bold: true }, { text: 'Categoria', bold: true }, { text: 'Ubicacion', bold: true }, { text: 'Precio', bold: true }],
              [this.listPrestamos[0].pelicula, this.listPrestamos[0].socio, this.listPrestamos[0].fechaPrestamo, this.listPrestamos[0].fechaDevolucion]
            ]

            
          }
        }
      ]
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
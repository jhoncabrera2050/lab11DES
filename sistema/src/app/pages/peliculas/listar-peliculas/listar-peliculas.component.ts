import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

import * as pdfMake from  'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-listar-peliculas',
  templateUrl: './listar-peliculas.component.html',
  styleUrls: ['./listar-peliculas.component.css']
})
export class ListarPeliculasComponent {
  listPeliculas: Pelicula[] = [];
  elementos: number = 0;
  constructor(private _peliculaService: PeliculaService) {

  }
  ngOnInit(): void {
    
    this.obtenerPeliculas();

  }
  obtenerPeliculas(){
    this._peliculaService.getPeliculas().subscribe(data => {
      console.log(data);
      this.listPeliculas = data;
      this.elementos = this.listPeliculas.length;
    })
  }

  eliminarPelicula(id: any){
    this._peliculaService.deletePelicula(id).subscribe(data => {

      Swal.fire({
        title: 'Eliminacion de Producto',
        text: "¿Desea eliminar el producto?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(data);
          this.obtenerPeliculas();
          this.elementos = this.listPeliculas.length;
        }
      })
    })
  }
}

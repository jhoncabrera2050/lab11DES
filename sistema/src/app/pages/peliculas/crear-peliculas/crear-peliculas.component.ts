import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/models/pelicula';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-crear-peliculas',
  templateUrl: './crear-peliculas.component.html',
  styleUrls: ['./crear-peliculas.component.css']
})
export class CrearPeliculasComponent {
  peliculaForm : FormGroup

  constructor(private fb: FormBuilder,
      private router: Router,
      private _peliculaService: PeliculaService){
  this.peliculaForm = this.fb.group({
  titulo:  ['', Validators.required],
  genero: ['', Validators.required],
  director: ['', Validators.required],
  actores:    ['', Validators.required]
  })
  }


  agregarPelicla(){
    const PELICULA: Pelicula = {
      titulo: this.peliculaForm.get('titulo')?.value,
      genero: this.peliculaForm.get('genero')?.value,
      director: this.peliculaForm.get('director')?.value,
      actores: this.peliculaForm.get('actores')?.value,
    }

    console.log(PELICULA)

    Swal.fire({
      title: 'Creacion de Pelicula',
      text: "¿Desea crear la pelicula?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._peliculaService.guardarPelicula(PELICULA).subscribe(data =>{
          console.log(data);  
          this.router.navigate(['/listar-peliculas'])
        }) 
      }
    })
  }
}

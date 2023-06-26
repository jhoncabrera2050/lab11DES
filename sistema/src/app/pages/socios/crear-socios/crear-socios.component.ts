import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Socio } from 'src/app/models/socio';
import Swal from 'sweetalert2'
import { SocioService } from 'src/app/services/socio.service';
@Component({
  selector: 'app-crear-socios',
  templateUrl: './crear-socios.component.html',
  styleUrls: ['./crear-socios.component.css']
})
export class CrearSociosComponent {
  socioForm : FormGroup

  constructor(private fb: FormBuilder,
      private router: Router,
      private _socioService: SocioService){
  this.socioForm = this.fb.group({
  nombre:  ['', Validators.required],
  direccion: ['', Validators.required],
  telefono: ['', Validators.required]
  })
  }
  agregarSocio(){
    const SOCIO: Socio = {
      nombre: this.socioForm.get('nombre')?.value,
      direccion: this.socioForm.get('direccion')?.value,
      telefono: this.socioForm.get('telefono')?.value
    }

    console.log(SOCIO)

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
        this._socioService.guardarSocio(SOCIO).subscribe(data =>{
          console.log(data);  
          this.router.navigate(['/listar-productos'])
        }) 
      }
    })
  }
}

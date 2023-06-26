import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PrestamosService } from 'src/app/services/prestamos.service';

@Component({
  selector: 'app-crear-prestamos',
  templateUrl: './crear-prestamos.component.html',
  styleUrls: ['./crear-prestamos.component.css']
})
export class CrearPrestamosComponent implements OnInit {
  prestamosForm: FormGroup;
  peliculas: any[] = [];
  socios: any[] = [];

  constructor(
    private fb: FormBuilder,
    private prestamosService: PrestamosService,
    private router: Router
  ) {
    this.prestamosForm = this.fb.group({
      pelicula: ['', Validators.required],
      socio: ['', Validators.required],
      fechaPrestamo: ['', Validators.required],
      fechaDevolucion: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.obtenerPeliculas();
    this.obtenerSocios();
    this.realizarPrestamo();
  }

  obtenerPeliculas() {
    this.prestamosService.getPeliculas().subscribe(
      (response) => {
        this.peliculas = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  obtenerSocios() {
    this.prestamosService.getSocios().subscribe(
      (response) => {
        this.socios = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  realizarPrestamo() {
    if (this.prestamosForm.valid) {
      const prestamo = {
        pelicula: this.prestamosForm.get('pelicula')?.value,
        socio: this.prestamosForm.get('socio')?.value,
        fechaPrestamo: this.prestamosForm.get('fechaPrestamo')?.value,
        fechaDevolucion: this.prestamosForm.get('fechaDevolucion')?.value
      };

      console.log(prestamo)
      
      this.prestamosService.guardarPrestamo(prestamo).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/listar-productos']);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      // Formulario inválido, mostrar errores o tomar alguna acción
    }
  }
}

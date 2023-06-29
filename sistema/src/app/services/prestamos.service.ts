import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestamos } from '../models/prestamos';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {
  url = 'http://localhost:4000/api/prestamos/';

  constructor(private http: HttpClient) { 

  }

  getPeliculas(): Observable<any> {
    const peliculasUrl = this.url + 'peliculas'; // Agrega la ruta 'peliculas' al final de la URL
    return this.http.get(peliculasUrl);
  }
  getSocios(): Observable<any> {
    const sociosUrl = this.url + 'socios'; // Agrega la ruta 'socios' al final de la URL
    return this.http.get(sociosUrl);
  }
  guardarPrestamo(prestamos: Prestamos): Observable<any> {
    return this.http.post(this.url + 'prestamos', prestamos);
  }

  getPrestamos(): Observable<any> {
    const prestamosUrl = this.url + 'listar'; // Agrega la ruta 'peliculas' al final de la URL
    return this.http.get(prestamosUrl);
  }

  deletePrestamo(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
}

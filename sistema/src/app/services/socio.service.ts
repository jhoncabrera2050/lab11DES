import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socio } from '../models/socio';

@Injectable({
  providedIn: 'root'
})
export class SocioService {
  url = 'http://localhost:4000/api/socios/';
  constructor(private http: HttpClient) { 
  }
  getSocio(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteSocio(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarSocio(socio: Socio): Observable<any> {
    return this.http.post(this.url, socio);
  }

  viewSocio(id?: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  actualizarSocio(id: string, socio: Socio): Observable<any> {
    return this.http.put(this.url + id, socio);
  }
}

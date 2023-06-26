import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/users/login/login.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { ListarProductosComponent } from './pages/productos/listar-productos/listar-productos.component';
import { CrearProductosComponent } from './pages/productos/crear-productos/crear-productos.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { EditarProductosComponent } from './pages/productos/editar-productos/editar-productos.component';
import { TiendasComponent } from './pages/tiendas/tiendas.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';
import { CrearPeliculasComponent } from './pages/peliculas/crear-peliculas/crear-peliculas.component';
import { EditarPeliculasComponent } from './pages/peliculas/editar-peliculas/editar-peliculas.component';

import { CrearSociosComponent } from './pages/socios/crear-socios/crear-socios.component';
import { ListarSociosComponent } from './pages/socios/listar-socios/listar-socios.component';
import { ListarPeliculasComponent } from './pages/peliculas/listar-peliculas/listar-peliculas.component';
import { CrearPrestamosComponent } from './pages/prestamos/crear-prestamos/crear-prestamos.component';
import { ListarPrestamosComponent } from './pages/prestamos/listar-prestamos/listar-prestamos.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    ListarProductosComponent,
    CrearProductosComponent,
    NavbarComponent,
    EditarProductosComponent,
    TiendasComponent,
    CrearPeliculasComponent,
    EditarPeliculasComponent,
    CrearSociosComponent,
    ListarSociosComponent,
    ListarPeliculasComponent,
    CrearPrestamosComponent,
    ListarPrestamosComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

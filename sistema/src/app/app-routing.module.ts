import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductosComponent } from './pages/productos/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './pages/productos/editar-productos/editar-productos.component';
import { ListarProductosComponent } from './pages/productos/listar-productos/listar-productos.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { LoginComponent } from './pages/users/login/login.component';
import { TiendasComponent } from './pages/tiendas/tiendas.component';
import { CrearPeliculasComponent } from './pages/peliculas/crear-peliculas/crear-peliculas.component';
import { CrearSociosComponent } from './pages/socios/crear-socios/crear-socios.component';
import { ListarPeliculasComponent } from './pages/peliculas/listar-peliculas/listar-peliculas.component';
import { CrearPrestamosComponent } from './pages/prestamos/crear-prestamos/crear-prestamos.component';


const routesInicio: Routes = [
  { path: '', component: LoginComponent },
  { path: 'crear-usuario', component: CreateUserComponent },
  { path: 'listar-productos', component: ListarProductosComponent },
  { path: 'listar-peliculas', component: ListarPeliculasComponent },
  { path: 'crear-productos', component: CrearProductosComponent },
  { path: 'editar-producto/:id', component: EditarProductosComponent },
  { path: 'tiendas', component: TiendasComponent },
  { path: 'crear-pelicula', component: CrearPeliculasComponent },
  { path: 'crear-socios', component: CrearSociosComponent },
  { path: 'crear-prestamos', component: CrearPrestamosComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routesInicio)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

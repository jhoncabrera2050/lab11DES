export class Prestamos {
    
    _id?: string;
    pelicula: string;
    socio: string;
    fechaPrestamo: Date;
    fechaDevolucion: Date;
  
    constructor(pelicula: string, socio: string,fechaPrestamo:Date,fechaDevolucion:Date ) {
      this.pelicula = pelicula;
      this.socio = socio;
      this.fechaPrestamo = fechaPrestamo;
      this.fechaDevolucion = fechaDevolucion;
    }

}
export class Pelicula {

    _id?: string;
    titulo: string;
    genero: string;
    director: string;
    actores: string;
    fechaCreacion: number;

    constructor(titulo:string, genero:string, director: string, actores: string, fechaCreacion: number){
        this.titulo = titulo;
        this.genero = genero;
        this.director = director;
        this.actores = actores;
        this.fechaCreacion = fechaCreacion;
    }

}
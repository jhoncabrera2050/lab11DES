export class Socio {

    _id?: string;
    nombre: string;
    direccion: string;
    telefono: string;


    constructor(nombre:string, direccion:string, telefono: string){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

}
export interface Usuario {
    id_usuario?:     number;
    nombre:          string;
    apellido:        string;
    email:           string;
    dni:             string;
    contraseña:      string;
    fecha_nacimiento: Date;
}
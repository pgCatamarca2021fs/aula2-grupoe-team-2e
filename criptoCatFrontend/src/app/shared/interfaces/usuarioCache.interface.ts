export interface Moneda {
    billeteras:             Billetera[];
    detalle_operacion:      any[];
    detalle_operacion1:     any[];
    id_moneda:              number;
    tipo:                   string;
    id_historialcotizacion: null;
}

export interface Billetera {
    moneda?:      Moneda;
    id_billetera: number;
    id_cuenta:    number;
    id_moneda:    number;
    monto_dinero: number;
    cuenta?:      Cuenta;
}

export interface Cuenta {
    billeteras: Billetera[];
    id_cuenta:  number;
    cvu:        number;
    id_usuario: number;
    usuario?:   UsuarioCache;
}

export interface UsuarioCache {
    cuenta:            Cuenta[];
    usuario_operacion: null;
    id_usuario:        number;
    nombre:            string;
    apellido:          string;
    email:             string;
    dni:               string;
    fecha_nacimiento:  Date;
    contraseña:        string;
}

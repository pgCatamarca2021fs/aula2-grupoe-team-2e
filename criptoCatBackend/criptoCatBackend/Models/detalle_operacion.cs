//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace criptoCatBackend.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class detalle_operacion
    {
        public int id_detalleoperacion { get; set; }
        public Nullable<int> moneda_usuario_origen { get; set; }
        public Nullable<decimal> monto_usuario_origen { get; set; }
        public Nullable<double> monto_requerido { get; set; }
        public Nullable<int> cbu_usuario { get; set; }
        public Nullable<int> id_usuario_destino { get; set; }
        public Nullable<int> id_operacion { get; set; }
        public Nullable<int> moneda_requerida { get; set; }
        public Nullable<int> id_usuario_operacion { get; set; }
    
        public virtual moneda moneda { get; set; }
        public virtual tipo_operacion tipo_operacion { get; set; }
        public virtual usuario_operacion usuario_operacion { get; set; }
    }
}

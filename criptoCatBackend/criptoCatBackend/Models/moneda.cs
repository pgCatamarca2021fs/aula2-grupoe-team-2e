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
    
    public partial class moneda
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public moneda()
        {
            this.billeteras = new HashSet<billeteras>();
            this.detalle_operacion = new HashSet<detalle_operacion>();
        }
    
        public int id_moneda { get; set; }
        public string tipo { get; set; }
        public Nullable<int> id_historialcotizacion { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<billeteras> billeteras { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<detalle_operacion> detalle_operacion { get; set; }
        public virtual historial_cotizacion historial_cotizacion { get; set; }
    }
}

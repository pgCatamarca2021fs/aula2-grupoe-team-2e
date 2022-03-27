using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace criptoCatBackend.Models
{
    public class FormOperacion
    {
        public Coin coinSelected { get; set; }
        public float cantidadPesos { get; set; }
        public float cantidadCripto { get; set; }
        public string tipoOperacion { get; set; }

    }
}
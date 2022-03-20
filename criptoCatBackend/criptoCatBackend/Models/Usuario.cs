using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace criptoCatBackend.Models
{
    public class Usuario
    {   //atributos(caracteristicas)
        private int id;
        private string nombre;
        private string apellido;
        private string email;
        private string dni;
        private string contraseña;
        private DateTime fechaNacimiento;

        //propiedades
        public int Id { get => id; set => id = value; } // sin set para que solo lo lea
        public string Nombre { get => nombre; set => nombre = value; }
        public string Apellido { get => apellido; set => apellido = value; }
        public string Email { get => email; set => email = value; }
        public string Dni { get => dni; set => dni = value; }
        public string Contraseña { get => contraseña; set => contraseña = value; }
        public DateTime FechaNacimiento { get => fechaNacimiento; set => fechaNacimiento = value; }

        //constructores
        public Usuario(int id, string nombre, string apellido, string email, string dni, DateTime fechaNacimiento)
        {
            this.id = id;
            this.nombre = nombre;
            this.apellido = apellido;
            this.email = email;
            this.dni = dni;
            this.Contraseña = contraseña;
            this.fechaNacimiento = fechaNacimiento;
        }
        //constructor
        public Usuario()
        {
        }

        //metodo
        public void saludar()
        {

        }
    }
}
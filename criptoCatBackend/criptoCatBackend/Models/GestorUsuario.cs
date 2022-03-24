using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.Web.Mvc;

namespace criptoCatBackend.Models
{
    public class GestorUsuario
    {
        string conectionString = ConfigurationManager.ConnectionStrings["BDCriptoCat"].ToString(); //cadena de conexión

        public List<usuario> ListaPersona()
        {
            List<usuario> lista = new List<usuario>(); //lista tendra una nueva lista de personas(array)

            //Con esto se establece que la recurso declarada debe ser liberado al final del alcance donde se declaro
            using (SqlConnection sqlconnection = new SqlConnection(this.conectionString))
            {
                sqlconnection.Open();

                SqlCommand command = sqlconnection.CreateCommand();
                command.CommandText = "listarUsuarios";
                command.CommandType = CommandType.StoredProcedure;
                //le decimos que esto es un procedimiento almacenado SQL

                SqlDataReader dataReader = command.ExecuteReader();
                //accedo a mi comando(command) y accedo al metodo ExecuteReader

                while (dataReader.Read())
                {
                    usuario persona = new usuario();
                    persona.id_usuario = dataReader.GetInt32(0);
                    persona.nombre = dataReader.GetString(1);
                    persona.apellido = dataReader.GetString(2);
                    persona.email = dataReader.GetString(3);
                    persona.dni = dataReader.GetString(4);
                    persona.fecha_nacimiento = dataReader.GetDateTime(5);
                    persona.contraseña = dataReader.GetString(6);
                    //los datos que obtenemos del dataReader lo recorremos y guardamos cada valor en persona
                    //para luego insertarlo en la lista 

                    lista.Add(persona);
                }

            }
            return lista;
        }

        public void CrearPersona(usuario persona) {
            using (SqlConnection connection = new SqlConnection(this.conectionString)) {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = "insertarusuario";
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.Add(new SqlParameter("@nombre", persona.nombre));
                command.Parameters.Add(new SqlParameter("@apellido", persona.apellido));
                command.Parameters.Add(new SqlParameter("@email", persona.email));
                command.Parameters.Add(new SqlParameter("@dni", persona.dni));
                command.Parameters.Add(new SqlParameter("@fechadenacimiento", persona.fecha_nacimiento));
                command.Parameters.Add(new SqlParameter("@contraseña", persona.contraseña));
                command.ExecuteNonQuery();

                SqlCommand commandCuenta = connection.CreateCommand();
                commandCuenta.CommandText = "crearCuenta";
                commandCuenta.CommandType = CommandType.StoredProcedure;
                Random cvuRamdon = new Random();
                int cvuDni = cvuRamdon.Next(10000000, int.Parse(persona.dni));
                commandCuenta.Parameters.Add(new SqlParameter("@cvu", cvuDni));
                commandCuenta.Parameters.Add(new SqlParameter("@dni", persona.dni));
                commandCuenta.ExecuteNonQuery();

                
                SqlCommand commandBilletera = connection.CreateCommand();
                commandBilletera.CommandText = "crearBilleteraPesos";
                commandBilletera.CommandType = CommandType.StoredProcedure;
                commandBilletera.Parameters.Add(new SqlParameter("@cvu", cvuDni));
                commandBilletera.ExecuteNonQuery();
            }
        }

        public void UsuarioLogin( string email , usuario loginUsuario)
        {
            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = "buscarUsuarioPorMailContrasena";
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.Add(new SqlParameter("@email", email));
                command.Parameters.Add(new SqlParameter("@contraseña", loginUsuario.contraseña));
                command.ExecuteNonQuery();
            }

        }
        
    }
}
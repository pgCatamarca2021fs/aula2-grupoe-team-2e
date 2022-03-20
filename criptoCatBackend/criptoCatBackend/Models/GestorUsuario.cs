using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace criptoCatBackend.Models
{
    public class GestorUsuario
    {
        string conectionString = ConfigurationManager.ConnectionStrings["BDCriptoCat"].ToString(); //cadena de conexión

        public List<Usuario> ListaPersona()
        {
            List<Usuario> lista = new List<Usuario>(); //lista tendra una nueva lista de personas(array)

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
                    Usuario persona = new Usuario();
                    persona.Id = dataReader.GetInt32(0);
                    persona.Nombre = dataReader.GetString(1);
                    persona.Apellido = dataReader.GetString(2);
                    persona.Email = dataReader.GetString(3);
                    persona.Dni = dataReader.GetString(4);
                    persona.FechaNacimiento = dataReader.GetDateTime(5);
                    persona.Contraseña = dataReader.GetString(6);
                    //los datos que obtenemos del dataReader lo recorremos y guardamos cada valor en persona
                    //para luego insertarlo en la lista 

                    lista.Add(persona);
                }

            }
            return lista;
        }
        public void CrearPersona(Usuario persona) {
            using (SqlConnection connection = new SqlConnection(this.conectionString)) {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = "insertarusuario";
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.Add(new SqlParameter("@nombre", persona.Nombre));
                command.Parameters.Add(new SqlParameter("@apellido", persona.Apellido));
                command.Parameters.Add(new SqlParameter("@email", persona.Email));
                command.Parameters.Add(new SqlParameter("@dni", persona.Dni));
                command.Parameters.Add(new SqlParameter("@contraseña", persona.Contraseña));
                command.Parameters.Add(new SqlParameter("@fechadenacimiento", persona.FechaNacimiento));
                command.ExecuteNonQuery();
            }
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data.SqlClient;

namespace criptoCatBackend.Models
{
    public class GestorPersona
    {
        string conectionString = ConfigurationManager.ConnectionStrings["BDCriptoCat"].ToString();

        public List<Persona> ListaPersona()
        {
            List<Persona> lista = new List<Persona>();

            using(SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandText = "";
                command.CommandType = System.Data.CommandType.StoredProcedure;

                SqlDataReader dataReader = command.ExecuteReader();

            }
             
                return lista;
        }
        public void CrearPersona(Persona persona) {
            using (SqlConnection connection = new SqlConnection(this.conectionString)) {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = "insertarusuario";
                command.CommandType = System.Data.CommandType.StoredProcedure;
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
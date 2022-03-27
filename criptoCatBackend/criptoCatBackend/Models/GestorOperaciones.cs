using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace criptoCatBackend.Models
{
    public class GestorOperaciones
    {
        string conectionString = ConfigurationManager.ConnectionStrings["BDCriptoCat"].ToString(); //cadena de conexión

        public void CrearOperacion(int id , FormOperacion datosEntrada )
        {
            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = "crearOperacion";
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.Add(new SqlParameter("@idUsuario", id));
                command.Parameters.Add(new SqlParameter("@fechaHoy", DateTime.Now));
                command.ExecuteNonQuery();

                SqlCommand command2 = connection.CreateCommand();
                command2.CommandText = "crearDetalleOperacion";
                command2.CommandType = CommandType.StoredProcedure;
                command2.Parameters.Add(new SqlParameter("@coinSelected", datosEntrada.coinSelected.id.ToUpper()));
                command2.Parameters.Add(new SqlParameter("@CantidadPesos", datosEntrada.cantidadPesos));
                command2.Parameters.Add(new SqlParameter("@CantidadCripto", datosEntrada.cantidadCripto));
                command2.Parameters.Add(new SqlParameter("@tipoOperacion", datosEntrada.tipoOperacion));
                command2.Parameters.Add(new SqlParameter("@idUsuario", id));
                command2.ExecuteNonQuery();

            }
        }

    }
}
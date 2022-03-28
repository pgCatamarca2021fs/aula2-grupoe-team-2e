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
        BDCriptoCatEntities db = new BDCriptoCatEntities();
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
        public void CrearVenta(int id, FormOperacion datosEntrada) {
            using (SqlConnection connection = new SqlConnection(this.conectionString)) {
                cuenta oCuentados = db.cuenta.Where(u => u.id_usuario == id).FirstOrDefault();
                billeteras oBilleteraCripto = db.billeteras.Where(u => u.id_cuenta == oCuentados.id_cuenta &&
                u.moneda.tipo == datosEntrada.coinSelected.id.ToUpper()).FirstOrDefault();

                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = "VenderLaCripto";
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.Add(new SqlParameter("@id_billetera", oBilleteraCripto.id_billetera));
                command.Parameters.Add(new SqlParameter("@id_cuenta", oCuentados.id_cuenta));
                command.Parameters.Add(new SqlParameter("@id_tipo", oBilleteraCripto.moneda.id_moneda));
                command.Parameters.Add(new SqlParameter("@monto_dinero", datosEntrada.cantidadPesos));// es un monto en pesos de la entrada 
                command.ExecuteNonQuery();

                connection.Open();
                SqlCommand commanddos = connection.CreateCommand();
                commanddos.CommandText = "crearOperacion";
                commanddos.CommandType = CommandType.StoredProcedure;
                commanddos.Parameters.Add(new SqlParameter("@idUsuario", id));
                commanddos.Parameters.Add(new SqlParameter("@fechaHoy", DateTime.Now));
                commanddos.ExecuteNonQuery();

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
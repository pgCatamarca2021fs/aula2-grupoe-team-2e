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

        BDCryptoCatEntities db = new BDCryptoCatEntities();

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

                //pregunto si existe la billetera
                cuenta oCuenta = db.cuenta.Where(u => u.id_usuario == id).FirstOrDefault();
                billeteras oBilleteraCripto = db.billeteras.Where(u => u.id_cuenta == oCuenta.id_cuenta &&
                u.moneda.tipo == datosEntrada.coinSelected.id.ToUpper()).FirstOrDefault();
                if (oBilleteraCripto == null)
                {
                    SqlCommand commandBilletera = connection.CreateCommand();
                    commandBilletera.CommandText = "crearBilleteraCripto";
                    commandBilletera.CommandType = CommandType.StoredProcedure;
                    commandBilletera.Parameters.Add(new SqlParameter("@idCuenta", oCuenta.id_cuenta));
                    commandBilletera.Parameters.Add(new SqlParameter("@tipoMoneda", datosEntrada.coinSelected.id));
                    commandBilletera.Parameters.Add(new SqlParameter("@cantidadCripto", datosEntrada.cantidadCripto));
                    commandBilletera.ExecuteNonQuery();
                }
                else
                {
                    oBilleteraCripto.monto_dinero = (decimal?)((float)oBilleteraCripto.monto_dinero + datosEntrada.cantidadCripto);
                    db.billeteras.Attach(db.billeteras.Single(b => b.id_cuenta == oCuenta.id_cuenta &&
                    b.moneda.tipo == datosEntrada.coinSelected.id.ToUpper()));
                    db.Entry(oBilleteraCripto).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                }

                //restar plata de la billetera
                billeteras billeteraPesos = db.billeteras.Where(b => b.id_cuenta == oCuenta.id_cuenta
                    && b.id_moneda == 1).FirstOrDefault();
                billeteraPesos.monto_dinero = (decimal?)((float)billeteraPesos.monto_dinero - datosEntrada.cantidadPesos);

                db.billeteras.Attach(db.billeteras.Single(b => b.id_cuenta == oCuenta.id_cuenta && b.id_moneda == 1));
                db.Entry(billeteraPesos).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
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
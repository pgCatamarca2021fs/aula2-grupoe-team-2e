using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Data;

namespace criptoCatBackend.Models
{
    public class GestorBilletera
    {
        string conectionString = ConfigurationManager.ConnectionStrings["BDCriptoCat"].ToString(); //cadena de conexión

        public List<billeteras> ListarBilleteras(int id)
        {
            List<billeteras> lista = new List<billeteras>(); //lista tendra una nueva lista de personas(array)

            //Con esto se establece que la recurso declarada debe ser liberado al final del alcance donde se declaro
            using (SqlConnection sqlconnection = new SqlConnection(this.conectionString))
            {
                sqlconnection.Open();

                SqlCommand command = sqlconnection.CreateCommand();
                command.CommandText = "ListarBilleteras";
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.Add(new SqlParameter("@idUsuario", id));
                //le decimos que esto es un procedimiento almacenado SQL

                SqlDataReader dataReader = command.ExecuteReader();
                //accedo a mi comando(command) y accedo al metodo ExecuteReader

                while (dataReader.Read())
                {
                    billeteras billetera = new billeteras();
                    billetera.id_billetera = dataReader.GetInt32(0);
                    billetera.id_cuenta = dataReader.GetInt32(1);
                    billetera.id_moneda = dataReader.GetInt32(2);
                    billetera.monto_dinero = dataReader.GetDecimal(3);
                    //los datos que obtenemos del dataReader lo recorremos y guardamos cada valor en persona
                    //para luego insertarlo en la lista 

                    lista.Add(billetera);
                }

            }
            return lista;
        }
    }
}
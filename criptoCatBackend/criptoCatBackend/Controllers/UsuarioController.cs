using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using criptoCatBackend.Models;
using System.Web.Http.Cors;
using System.Web.Mvc;
using RouteAttribute = System.Web.Http.RouteAttribute;

namespace criptoCatBackend.Controllers
{
    [EnableCors( origins: "*" , headers: "*" , methods: "*" )]
    public class UsuarioController : ApiController
    {

        BDCryptoCatEntities db = new BDCryptoCatEntities();

        // GET api/<controller>
        public IEnumerable<usuario> Get()
        {
            GestorUsuario gestor = new GestorUsuario();
            return gestor.ListaPersona();
        }

        // GET api/<controller>/5
        public usuario Get(string email)
        {
            return new usuario();
        }


        public class Login
        {
            public string Email { get; set; }
            public string Contrasena { get; set; }
        }

        [Route("api/Usuario/Login")]
        public usuario Post([FromBody] Login datosEntrada)
        {
            usuario oUsuario = db.usuario.Where(u => u.email == datosEntrada.Email && u.contraseña == datosEntrada.Contrasena).FirstOrDefault();
            return oUsuario;
        }

        // POST api/<controller>
        public void Post([FromBody] usuario value)
        {
            GestorUsuario gestor = new GestorUsuario();
            gestor.CrearPersona(value);

        }

        // POST api/<controller>/email
        //public void Post(string email , [FromBody] Usuario value)
        //{
        //    GestorUsuario usuario = new GestorUsuario();
        //    usuario.UsuarioLogin(email , value);

        //}

        // PUT api/<controller>/5
        public void Put(int id, [FromBody] usuario value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}
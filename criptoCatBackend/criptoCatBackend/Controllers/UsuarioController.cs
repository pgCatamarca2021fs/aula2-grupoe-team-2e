using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using criptoCatBackend.Models;
using System.Web.Http.Cors;
using System.Web.Mvc;

namespace criptoCatBackend.Controllers
{
    [EnableCors( origins: "http://localhost:4200" , headers: "*" , methods: "*" )]
    public class UsuarioController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<Usuario> Get()
        {
            GestorUsuario gestor = new GestorUsuario();
            return gestor.ListaPersona();
        }

        // GET api/<controller>/5
        public Usuario Get(string email)
        {
            return new Usuario();
        }

        // POST api/<controller>
        public void Post([FromBody] Usuario value)
        {
            GestorUsuario gestor = new GestorUsuario();
            gestor.CrearPersona(value);

        }

        // POST api/<controller>/email
        public void Post(string email , [FromBody] Usuario value)
        {
            GestorUsuario usuario = new GestorUsuario();
            usuario.UsuarioLogin(email , value);

        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody] Usuario value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}
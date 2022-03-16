using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using criptoCatBackend.Models;

namespace criptoCatBackend.Controllers
{
    public class PersonaController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<Persona> Get()
        {
            return null;
        }

        // GET api/<controller>/5
        public Persona Get(int id)
        {
            return new Persona();
        }

        // POST api/<controller>
        public void Post([FromBody] Persona value)
        {
            GestorPersona gestor = new GestorPersona();
            gestor.CrearPersona(value);

        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody] Persona value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}
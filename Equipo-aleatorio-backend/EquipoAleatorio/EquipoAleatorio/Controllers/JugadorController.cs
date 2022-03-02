namespace EquipoAleatorio.Controllers
{
    using System.Collections.Generic;
    using EquipoAleatorio.Entidades.Contexto;
    using EquipoAleatorio.Negocio.Interfaces;
    using Microsoft.AspNetCore.Mvc;

    [Route("api/[controller]")]
    [ApiController]
    public class JugadorController : ControllerBase
    {
        private readonly IJugadorNegocio jugadorNegocio;

        public JugadorController(IJugadorNegocio jugadorNegocio)
        {
            this.jugadorNegocio = jugadorNegocio;
        }

        [HttpPost]
        public IActionResult CrearJugador([FromBody] Jugador jugador)
        {
            jugadorNegocio.CrearJugador(jugador);

            return new OkResult();
        }

        [HttpGet]
        public IEnumerable<Jugador> ConsultarJugadores()
        {
            return jugadorNegocio.ConsultarJugadores();
        }
    }
}

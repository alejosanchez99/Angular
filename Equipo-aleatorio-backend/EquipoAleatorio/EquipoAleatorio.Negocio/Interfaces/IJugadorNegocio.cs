namespace EquipoAleatorio.Negocio.Interfaces
{
    using System.Collections.Generic;
    using EquipoAleatorio.Entidades.Contexto;

    public interface IJugadorNegocio
    {
        void CrearJugador(Jugador jugador);
        IEnumerable<Jugador> ConsultarJugadores();
    }
}

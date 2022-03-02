namespace EquipoAleatorio.AccesoDatos.Repositorio
{
    using EquipoAleatorio.AccesoDatos.Context;
    using EquipoAleatorio.AccesoDatos.Interfaces;
    using EquipoAleatorio.Entidades.Contexto;

    public class JugadorRepositorio : RepositorioGenerico<Jugador>, IJugadorRepositorio
    {
        public JugadorRepositorio(ApplicationDbContext contexto) : base(contexto) { }
    }
}

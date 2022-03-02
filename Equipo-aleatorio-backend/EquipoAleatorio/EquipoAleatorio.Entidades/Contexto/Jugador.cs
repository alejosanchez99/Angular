namespace EquipoAleatorio.Entidades.Contexto
{
    using System.ComponentModel.DataAnnotations;

    public class Jugador
    {
        [Key]
        public int IdJugador { get; set; }

        public string NombreJugador { get; set; }

        public TipoJugador TipoJugador { get; set; }
    }
}

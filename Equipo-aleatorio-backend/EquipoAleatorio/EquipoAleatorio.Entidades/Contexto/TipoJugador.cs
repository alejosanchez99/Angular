namespace EquipoAleatorio.Entidades.Contexto
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.Text;

    public class TipoJugador  
    {
        [Key]
        public int IdTipoJugador { get; set; }

        public string NombreTipoJugador { get; set; }
    }
}

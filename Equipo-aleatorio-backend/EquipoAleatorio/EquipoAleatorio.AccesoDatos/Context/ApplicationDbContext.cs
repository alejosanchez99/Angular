namespace EquipoAleatorio.AccesoDatos.Context
{
    using EquipoAleatorio.Entidades.Contexto;
    using Microsoft.EntityFrameworkCore;

    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Jugador> Jugador { get; set; }
        public DbSet<TipoJugador> TipoJugador { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Jugador>(entity => entity.Property(e => e.IdJugador).ValueGeneratedOnAdd());

            modelBuilder.Entity<Jugador>().HasIndex(p => p.NombreJugador).IsUnique();
            modelBuilder.Entity<TipoJugador>().HasIndex(p => p.NombreTipoJugador).IsUnique();
        }
    }
}

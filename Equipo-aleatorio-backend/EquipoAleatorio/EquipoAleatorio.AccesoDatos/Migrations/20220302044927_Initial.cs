using Microsoft.EntityFrameworkCore.Migrations;

namespace EquipoAleatorio.AccesoDatos.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TipoJugador",
                columns: table => new
                {
                    IdTipoJugador = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NombreTipoJugador = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TipoJugador", x => x.IdTipoJugador);
                });

            migrationBuilder.CreateTable(
                name: "Jugador",
                columns: table => new
                {
                    IdJugador = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NombreJugador = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    TipoJugadorIdTipoJugador = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Jugador", x => x.IdJugador);
                    table.ForeignKey(
                        name: "FK_Jugador_TipoJugador_TipoJugadorIdTipoJugador",
                        column: x => x.TipoJugadorIdTipoJugador,
                        principalTable: "TipoJugador",
                        principalColumn: "IdTipoJugador",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Jugador_NombreJugador",
                table: "Jugador",
                column: "NombreJugador",
                unique: true,
                filter: "[NombreJugador] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Jugador_TipoJugadorIdTipoJugador",
                table: "Jugador",
                column: "TipoJugadorIdTipoJugador");

            migrationBuilder.CreateIndex(
                name: "IX_TipoJugador_NombreTipoJugador",
                table: "TipoJugador",
                column: "NombreTipoJugador",
                unique: true,
                filter: "[NombreTipoJugador] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Jugador");

            migrationBuilder.DropTable(
                name: "TipoJugador");
        }
    }
}

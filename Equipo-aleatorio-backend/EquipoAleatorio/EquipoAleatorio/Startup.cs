namespace EquipoAleatorio
{
    using EquipoAleatorio.AccesoDatos.Context;
    using EquipoAleatorio.AccesoDatos.Interfaces;
    using EquipoAleatorio.AccesoDatos.Repositorio;
    using EquipoAleatorio.Negocio.Interfaces;
    using EquipoAleatorio.Negocio.Negocio;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Hosting;

    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            this.Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(option => option.UseSqlServer(Configuration.GetConnectionString("DefaultConnectionString")));
            services.AddControllers();
            AddDependencyInjection(services);
        }


        /// <summary>
        /// Se encarga de agregar la Inyeccion de Dependencias y Recursos.
        /// </summary>
        /// <param name="services"></param>
        public void AddDependencyInjection(IServiceCollection services)
        {
            services.AddTransient<IJugadorNegocio, JugadorNegocio>();
            services.AddTransient<IJugadorRepositorio, JugadorRepositorio>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}

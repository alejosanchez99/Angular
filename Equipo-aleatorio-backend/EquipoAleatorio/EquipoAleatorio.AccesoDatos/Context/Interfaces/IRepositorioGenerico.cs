namespace EquipoAleatorio.AccesoDatos.Context.Interfaces
{
    using System;
    using System.Collections.Generic;
    using System.Linq.Expressions;

    public interface IRepositorioGenerico<T> where T : class
    {
        void Crear(T entidad);
        void Agregar(IEnumerable<T> lista);
        IEnumerable<T> Consultar();
        IEnumerable<T> Buscar(Expression<Func<T, bool>> expresion);
        void Eliminar(T entidad);
        void Eliminar(IEnumerable<T> lista);
    }
}

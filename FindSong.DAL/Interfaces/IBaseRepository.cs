namespace FindSong.DAL.Interfaces;

public interface IBaseRepository<T>
{
    IQueryable<T> GetAll();
    Task<bool> Create(T entity);
    Task<bool> Delete(T entity);
    Task<T> Update(T entity);
}
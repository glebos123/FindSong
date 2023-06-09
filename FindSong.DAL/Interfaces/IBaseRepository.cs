﻿namespace FindSong.DAL.Interfaces;

public interface IBaseRepository<T>
{
    Task<IEnumerable<T>> GetAll();
    Task<bool> Create(T entity);
    Task<bool> Delete(T entity);
    Task<T> Update(T entity);
}
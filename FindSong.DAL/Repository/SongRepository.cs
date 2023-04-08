using FindSong.DAL.Interfaces;
using FindSong.Domain;
using Microsoft.EntityFrameworkCore;

namespace FindSong.DAL.Repository;

public class SongRepository : IBaseRepository<Song>
{
    private readonly ApplicationDbContext _db;
    public SongRepository(ApplicationDbContext db) => _db = db;

    public async Task<IQueryable<Song>> GetAll()
    {
        return (await _db.Songs.ToArrayAsync()).AsQueryable();
    }

    public async Task<bool> Create(Song entity)
    {
        _db.Songs.Add(entity);
        await _db.SaveChangesAsync();
        return true;
    }

    public async Task<bool> Delete(Song entity)
    {
        _db.Songs.Remove(entity);
        await _db.SaveChangesAsync();
        return true;
    }

    public async Task<Song> Update(Song entity)
    {
        _db.Songs.Update(entity);
        await _db.SaveChangesAsync();
        return entity;
    }
}
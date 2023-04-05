using FindSong.Domain;
using Microsoft.EntityFrameworkCore;

namespace FindSong.DAL;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }
    
    public DbSet<Song> Songs { get; set; }
}
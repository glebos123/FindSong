using FindSong.BLL.Implementation;
using FindSong.BLL.Interfaces;
using FindSong.DAL;
using FindSong.DAL.Interfaces;
using FindSong.DAL.Repository;
using FindSong.Domain;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<IBaseRepository<Song>, SongRepository>();

builder.Services.AddScoped<IBaseResponse<Song>, SongResponse>();

builder.Services.AddDbContext<ApplicationDbContext>(option =>
    option.UseNpgsql("Host=localhost;Port=5432;Database=FindSongDb;Username=postgres;Password=denis_sabaka_denis"));



var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.Run();
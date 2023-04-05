using FindSong.DAL;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ApplicationDbContext>(option =>
    option.UseNpgsql("Host=localhost;Port=5432;Database=FindSongDb;Username=postgres;Password=denis_sabaka_denis"));



var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.Run();
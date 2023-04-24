using FindSong.BLL.Implementation;
using FindSong.BLL.Interfaces;
using FindSong.DAL;
using FindSong.DAL.Interfaces;
using FindSong.DAL.Repository;
using FindSong.Domain;
using FindSong.Domain.Entity;
using FindSong.GraphQL;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();
builder.Services.AddScoped<IBaseRepository<Song>, SongRepository>();

builder.Services.AddScoped<IBaseResponse<Song>, SongResponse>();

builder.Services.AddDbContext<ApplicationDbContext>(option =>
    option.UseNpgsql("Host=localhost;Port=5432;Database=FindSongDb;Username=postgres;Password=denis_sabaka_denis"));

builder.Services.AddGraphQLServer()
    .AddQueryType<Queries>()
    .AddMutationType<Mutations>();


var app = builder.Build();
app.UseRouting();
app.UseCors(policy =>
{
    policy.AllowAnyOrigin();
    policy.AllowAnyHeader();
    policy.AllowAnyMethod();
});
app.MapGraphQL();
app.Run();
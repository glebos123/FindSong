using System.Collections;
using FindSong.BLL.Interfaces;
using FindSong.Domain;
using FindSong.Domain.Entity;
using FindSong.Domain.Enums;
using FindSong.Domain.Response;

namespace FindSong.GraphQL;

public class Queries
{
    public async Task<BaseResponse<IEnumerable<Song>>> GetSongs([Service] IBaseResponse<Song> baseResponse) =>
        await baseResponse.GetSongs();

    public async Task<BaseResponse<Song>> GetSong([Service] IBaseResponse<Song> baseResponse, Guid id) =>
        await baseResponse.GetSong(id);

    public async Task<BaseResponse<Song>> GetByName([Service] IBaseResponse<Song> baseResponse, string name) =>
        await baseResponse.GetSongByName(name);
    
    public async Task<BaseResponse<IEnumerable<Song>>> GetSimilar([Service] IBaseResponse<Song> baseResponse, string name, Mood mood, Instrumental instrumental, Vocal vocal, Speed speed) =>
        await baseResponse.GetSimilarSong(name, mood, instrumental, vocal, speed);
}
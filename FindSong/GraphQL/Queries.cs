using FindSong.BLL.Interfaces;
using FindSong.Domain;
using FindSong.Domain.Response;

namespace FindSong.GraphQL;

public class Queries
{
    public async Task<BaseResponse<IEnumerable<Song>>> GetSongs([Service] IBaseResponse<Song> baseResponse) =>
        await baseResponse.GetSongs();

    public async Task<BaseResponse<Song>> GetSong([Service] IBaseResponse<Song> baseResponse, int id) =>
        await baseResponse.GetSong(id);

    public async Task<BaseResponse<Song>> GetByName([Service] IBaseResponse<Song> baseResponse, string name) =>
        await baseResponse.GetSongByName(name);
}
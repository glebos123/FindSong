using FindSong.BLL.Interfaces;
using FindSong.Domain;
using FindSong.Domain.Response;

namespace FindSong.GraphQL;

public class Mutations
{
    public async Task<BaseResponse<bool>> CreateSong([Service] IBaseResponse<Song> baseResponse, Song song) =>
        await baseResponse.CreateSong(song);
    
    public async Task<BaseResponse<bool>> DeleteSong([Service] IBaseResponse<Song> baseResponse, int id) =>
        await baseResponse.DeleteSong(id);
    
    public async Task<BaseResponse<Song>> EditSong([Service] IBaseResponse<Song> baseResponse, Song song, int id) =>
        await baseResponse.EditSong(id, song);
}
using FindSong.Domain.Response;

namespace FindSong.BLL.Interfaces;

public interface IBaseResponse<T>
{
    Task<BaseResponse<T>> GetSong(int id);
    Task<BaseResponse<bool>> CreateSong(T entity);
    Task<BaseResponse<bool>> DeleteSong(int id);
    Task<BaseResponse<T>> EditSong(int id, T entity);
    Task<BaseResponse<IEnumerable<T>>> GetSongs();
    Task<BaseResponse<T>> GetSongByName(string name);
}
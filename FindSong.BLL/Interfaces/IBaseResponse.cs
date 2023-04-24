using System.Collections;
using FindSong.Domain.Entity;
using FindSong.Domain.Enums;
using FindSong.Domain.Response;

namespace FindSong.BLL.Interfaces;

public interface IBaseResponse<T>
{
    Task<BaseResponse<T>> GetSong(Guid id);
    Task<BaseResponse<bool>> CreateSong(T entity);
    Task<BaseResponse<bool>> DeleteSong(Guid id);
    Task<BaseResponse<T>> EditSong(Guid id, T entity);
    Task<BaseResponse<IEnumerable<T>>> GetSongs();
    Task<BaseResponse<T>> GetSongByName(string name);
    Task<BaseResponse<IEnumerable<T>>> GetSimilarSong(string name, Mood mood, Instrumental instrumental, Vocal vocal, Speed speed);
}
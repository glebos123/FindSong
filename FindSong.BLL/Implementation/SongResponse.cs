using FindSong.BLL.Interfaces;
using FindSong.DAL.Interfaces;
using FindSong.Domain;
using FindSong.Domain.Enums;
using FindSong.Domain.Response;
using Microsoft.EntityFrameworkCore;

namespace FindSong.BLL.Implementation;

public class SongResponse : IBaseResponse<Song>
{
    private readonly IBaseRepository<Song> _baseRepository;
    public SongResponse(IBaseRepository<Song> baseRepository) => _baseRepository = baseRepository;


    public async Task<BaseResponse<Song>> GetSong(int id)
    {
        var baseResponse = new BaseResponse<Song>();
        try
        {
            var song = await _baseRepository.GetAll().FirstOrDefaultAsync(x => x.Id == id);
            if (song == null)
            {
                baseResponse.Description = "not found by id";
                baseResponse.StatusCode = StatusCode.InternalServerError;
                return baseResponse;
            }
            baseResponse.Data = song;
            baseResponse.StatusCode = StatusCode.OK;
            return baseResponse;
        }
        catch (Exception e)
        {
            return new BaseResponse<Song>()
            {
                Description = $"[GetSong] : {e.Message}",
                StatusCode = StatusCode.InternalServerError
            };
        }
    }

    public async Task<BaseResponse<bool>> CreateSong(Song entity)
    {
        var baseResponse = new BaseResponse<bool>();
        try
        {
            var song = new Song
            {
                SongName = entity.SongName,
                Mood = entity.Mood,
                Speed = entity.Speed
            };
            await _baseRepository.Create(song);
            baseResponse.Data = true;
            baseResponse.StatusCode = StatusCode.OK;
            return baseResponse;
        }
        catch (Exception e)
        {
            return new BaseResponse<bool>()
            {
                Description = $"[CreateSong] : {e.Message}",
                StatusCode = StatusCode.InternalServerError
            };
        }
    }

    public async Task<BaseResponse<bool>> DeleteSong(int id)
    {
        var baseResponse = new BaseResponse<bool>();
        try
        {
            var getSong = await _baseRepository.GetAll().FirstOrDefaultAsync(x => x.Id == id);
            if (getSong == null)
            {
                baseResponse.Description = "not found by id to delete";
                baseResponse.StatusCode = StatusCode.InternalServerError;
                return baseResponse;
            }

            await _baseRepository.Delete(getSong);
            baseResponse.Data = true;
            baseResponse.StatusCode = StatusCode.OK;
            return baseResponse;
        }
        catch (Exception e)
        {
            return new BaseResponse<bool>()
            {
                Description = $"[DeleteSong] : {e.Message}",
                StatusCode = StatusCode.InternalServerError
            };
        }
    }

    public async Task<BaseResponse<Song>> EditSong(int id, Song entity)
    {
        var baseResponse = new BaseResponse<Song>();
        try
        {
            var getSong = await _baseRepository.GetAll().FirstOrDefaultAsync(x => x.Id == id);
            if (getSong == null)
            {
                baseResponse.Description = "not found by id to edit";
                baseResponse.StatusCode = StatusCode.InternalServerError;
                return baseResponse;
            }
            getSong.SongName = entity.SongName;
            getSong.Mood = entity.Mood;
            getSong.Speed = entity.Speed;
            await _baseRepository.Update(entity);
            baseResponse.Data = getSong;
            baseResponse.StatusCode = StatusCode.OK;
            return baseResponse;
        }
        catch (Exception e)
        {
            return new BaseResponse<Song>()
            {
                Description = $"[EditSong] : {e.Message}",
                StatusCode = StatusCode.InternalServerError
            };
        }
    }

    public async Task<BaseResponse<IEnumerable<Song>>> GetSongs()
    {
        var baseResponse = new BaseResponse<IEnumerable<Song>>();
        try
        {
            var songs = await _baseRepository.GetAll().ToListAsync();
            if (songs == null)
            {
                baseResponse.Description = "list is null";
                baseResponse.StatusCode = StatusCode.InternalServerError;
                return baseResponse;
            }
            baseResponse.Data = songs;
            baseResponse.StatusCode = StatusCode.OK;
            return baseResponse;
        }
        catch (Exception e)
        {
            return new BaseResponse<IEnumerable<Song>>()
            {
                Description = $"[GetSongs] : {e.Message}",
                StatusCode = StatusCode.InternalServerError
            };
        }
    }

    public async Task<BaseResponse<Song>> GetSongByName(string name)
    {
        var baseResponse = new BaseResponse<Song>();
        try
        {
            var song = await _baseRepository.GetAll().FirstOrDefaultAsync(x => x.SongName == name);
            if (song == null)
            {
                baseResponse.Description = "not found by name";
                baseResponse.StatusCode = StatusCode.InternalServerError;
                return baseResponse;
            }
            baseResponse.Data = song;
            baseResponse.StatusCode = StatusCode.OK;
            return baseResponse;
        }
        catch (Exception e)
        {
            return new BaseResponse<Song>()
            {
                Description = $"[GetSongByName] : {e.Message}",
                StatusCode = StatusCode.InternalServerError
            };
        }
    }
}
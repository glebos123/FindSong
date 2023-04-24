using FindSong.Domain.Enums;

namespace FindSong.Domain.Entity;

public class Song
{
    public Guid? Id { get; set; }
    public string SongName { get; set; } = "";
    public Mood Mood { get; set; }
    public Speed Speed { get; set; }
    public Vocal Vocal { get; set; }
    public Instrumental Instrumental { get; set; }
}
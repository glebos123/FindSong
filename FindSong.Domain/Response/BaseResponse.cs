﻿using FindSong.Domain.Enums;

namespace FindSong.Domain.Response;

public class BaseResponse<T>
{
    public string Description { get; set; } = "";
    public StatusCode StatusCode { get; set; }
    public T Data { get; set; }
}
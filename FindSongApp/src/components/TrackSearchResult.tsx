import React, {Dispatch, FC, useState} from "react"
import {Song} from "./Song";
import {Link} from "react-router-dom";

interface ITrackSearchResult{
    track: {
        artist: string,
        title:string,
        uri: string,
        albumUrl: string,
    },

    setSong : Dispatch<string>
 
}



export const TrackSearchResult: FC<ITrackSearchResult> = React.memo((
    {
        track,
  
        setSong
        

    }
) => {
    
    function toSong() {
        setSong(track.title);
    }
    
    
    return (
        <div 
            className="d-flex justify-content-between m-2 align-items-center"
            style={{ cursor: "default" }}
        >
            <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
            <div className="ml-3">
                <div>{track.title}</div>
                <div className="text-muted">{track.artist}</div>
            </div>
            <Link onClick={toSong} to={"/Song"}>выбрать</Link>
        </div>
    )
})




import React, {FC, useState} from "react"
import {Song} from "./Song";

interface ITrackSearchResult{
    track: any,
 
}



export const TrackSearchResult: FC<ITrackSearchResult> = React.memo((
    {
        track,
        

    }
) => {
    
    const [song, setSong] = useState();
    function toSong() {
        setSong(track.title);
    }

    console.log(song);
    
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
            <a onClick={toSong} href={"/Song"}>выбрать</a>
        </div>
    )
})




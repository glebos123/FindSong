import React, {Dispatch, FC} from "react"
import {Button} from "react-bootstrap";

interface ITrackSearchResult{
    track: {
        artist: string,
        title:string,
        uri: string,
        albumUrl: string,
    },
    setSongName : Dispatch<string>
}

export const TrackSearchResult: FC<ITrackSearchResult> = React.memo((
    {
        track,
        setSongName,
    }
) => {

    function toSong() {
        setSongName(track.title)
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
            <Button onClick={() =>
            {   toSong();
            }}>выбрать</Button>
        </div>
    )
})




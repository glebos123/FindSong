import React, {FC, useEffect, useState} from "react"
import {GetSimilarSongQuery} from "../api/Queries.generated";
import {Button} from "react-bootstrap";
import {SongInput} from "../types.generated";
import {useNavigate} from "react-router-dom";

interface ISimilarSong{
    songData: SongInput | undefined,
    similarSongData:  GetSimilarSongQuery | undefined,
    songName: string
}

export const SimilarSong: FC<ISimilarSong> = React.memo((
    {
        songData,
        similarSongData,
        songName
    }
) => {
    
    const navigate = useNavigate();
    useEffect(() => {
        if (songName.length == 0){
            navigate('/Search')
        }
    },[songName])
    const [isShow, setIsShow] = useState(false)
    
    return (
        <div>
            <div >
                <label>Song name</label>
                <input disabled={true} defaultValue={songData?.songName} type="text" className="form-control"/>
            </div>
            <div >
                <label>Song mood</label>
                <input disabled={true} defaultValue={songData?.mood} type="text" className="form-control"/>
            </div>
            <div>
                <label>Song speed</label>
                <input disabled={true} defaultValue={songData?.speed} type="text" className="form-control"/>
            </div>
            <div >
                <label>Song instruments</label>
                <input disabled={true} defaultValue={songData?.instrumental} type="text" className="form-control"/>
            </div>
            <div >
                <label>Song mood</label>
                <input disabled={true} defaultValue={songData?.vocal} type="text" className="form-control"/>
            </div>
            
            <div>
                <Button onClick={() => {setIsShow(true)}}>Показать похожие</Button>
            </div>

            {
                isShow &&
                similarSongData?.similar.data.map((item) => 
                <div key={item.id}>
                    <div>
                        <label>Song name</label>
                        <input disabled={true} value={item.songName} type="text" className="form-control"/>
                    </div>
                    <div >
                        <label>Song mood</label>
                        <input disabled={true} value={item.mood} type="text" className="form-control"/>
                    </div>
                    <div>
                        <label>Song speed</label>
                        <input disabled={true} value={item.speed} type="text" className="form-control"/>
                    </div>
                    <div >
                        <label>Song instruments</label>
                        <input disabled={true} value={item.instrumental} type="text" className="form-control"/>
                    </div>
                    <div >
                        <label>Song mood</label>
                        <input disabled={true} value={item.vocal} type="text" className="form-control"/>
                    </div>
                    ------------------
                </div>
            )}
        </div>
    )
})




import React, {useEffect, FC, Dispatch} from "react"
import {Button, Container} from "react-bootstrap"

import {useLocation} from "react-router-dom";

interface IAllSongsResult{
    data: {
        id?: any,
        songName: string,
        speed: string,
        mood: string
    },
    setSongName: Dispatch<string>
}

export const AllSongsResult: FC<IAllSongsResult> = React.memo((
    {
        data,
        setSongName
    }

) => {
    const location = useLocation();
    
    useEffect(() => {
        if (location.pathname == "/AllSongs"){
            setSongName('');
        }
    })
    
    return (
        <Container className="d-flex flex-column py-2">
            <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
                <div >
                    <label>Song name</label>
                    <input disabled={true} value={data?.songName} type="text" className="form-control"/>
                </div>
                <Button onClick={() =>{setSongName(data.songName)}}>Перейти к песне</Button>
            </div>
        </Container>
    )
})
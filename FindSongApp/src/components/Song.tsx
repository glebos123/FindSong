import React, {useState, useEffect, FC, Dispatch} from "react"
import { Container, Form } from "react-bootstrap"
import SpotifyWebApi from "spotify-web-api-node"



interface ISong{
    song : string,
    setSong : Dispatch<string>
}

export const Song: FC<ISong> = React.memo((
    {
        song, setSong
    }

) => {
    
    return (
        <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
            {song}
        </Container>
    )
})
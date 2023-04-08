import React, {FC, Dispatch} from "react"
import { Container } from "react-bootstrap"

interface ISong{
    song : string,
    setSong : Dispatch<string>
}

export const Song: FC<ISong> = React.memo((
    {
        song
    }) => {
    return (
        <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
            {song}
        </Container>
    )
})
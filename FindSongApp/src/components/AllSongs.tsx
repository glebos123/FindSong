import React, {useState, useEffect, FC, Dispatch} from "react"
import { Container } from "react-bootstrap"
import {useQuery} from "@apollo/client";
import {
GetSongsDocument,
    GetSongsQuery, GetSongsQueryVariables
} from "../api/Queries.generated";
import {AllSongsResult} from "./AllSongsResult";

interface IAllSongs{
    songName: string,
    setSongName: Dispatch<string>
}

export const AllSongs: FC<IAllSongs> = React.memo((
    {
        setSongName
    }

) => {

    const [allSongsData, setAllSongsData] = useState<GetSongsQuery | undefined>();
    
    const {
        data
    } = useQuery<GetSongsQuery, GetSongsQueryVariables>(GetSongsDocument)

    useEffect(() => {
        setAllSongsData(data)
    },[data])
    
    return (
        <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
            <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
                {allSongsData?.songs.data.map(data => (
                    <AllSongsResult
                        setSongName={setSongName}
                        key={data.id}
                        data={data}
                    />
                ))}
            </div>
        </Container>
    )
})
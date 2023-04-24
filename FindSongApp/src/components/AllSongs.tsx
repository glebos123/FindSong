import React, {useState, useEffect, FC, Dispatch} from "react"
import { Container } from "react-bootstrap"
import {useLazyQuery, useQuery} from "@apollo/client";
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
    
    const {data, refetch, loading}= useQuery<GetSongsQuery, GetSongsQueryVariables>(GetSongsDocument)
   
    if (loading) return <></>
    
    return (
        <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
            <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
                {data?.songs.data.map(data => (
                    <AllSongsResult
                        refetch={refetch}
                        setSongName={setSongName}
                        key={data.id}
                        data={data}
                    />
                ))}
            </div>
        </Container>
    )
})
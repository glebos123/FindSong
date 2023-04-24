import React, {useEffect, FC, Dispatch} from "react"
import {Button, Container} from "react-bootstrap"

import {useLocation} from "react-router-dom";
import {ApolloQueryResult, LazyQueryExecFunction, useMutation} from "@apollo/client";
import {
    CreateSongDocument,
    CreateSongMutation,
    CreateSongMutationVariables, DeleteSongDocument,
    DeleteSongMutation, DeleteSongMutationVariables
} from "../api/Mutations.generated";
import {Exact} from "../types.generated";
import {GetSongsQuery} from "../api/Queries.generated";

interface IAllSongsResult{
    data: {
        id?: any,
        songName: string,
        speed: string,
        mood: string
    },
    setSongName: Dispatch<string>,
    refetch:   (variables?: (Partial<Exact<{[p: string]: never}>> | undefined)) => Promise<ApolloQueryResult<GetSongsQuery>>

}

export const AllSongsResult: FC<IAllSongsResult> = React.memo((
    {
        data,
        setSongName,
        refetch,
    }

) => {
    const location = useLocation();
    
    useEffect(() => {
        if (location.pathname == "/AllSongs"){
            setSongName('');
        }
    })

    const [deleteSong] = useMutation<DeleteSongMutation, DeleteSongMutationVariables>(DeleteSongDocument);
    
    const onDeleteSong = () =>{
        deleteSong({
            variables: {
                id: data.id
            }
        }).then(r => refetch())
    }
    
    return (
        <Container className="d-flex flex-column py-2">
            <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
                <div >
                    <label>Song name</label>
                    <input disabled={true} value={data?.songName} type="text" className="form-control"/>
                </div>
                <div>
                    <Button onClick={() =>{setSongName(data.songName)}}>Перейти к песне</Button>
                    <Button onClick={() =>{onDeleteSong()}}>Удалить песню</Button>
                </div> 
                
            </div>
        </Container>
    )
})
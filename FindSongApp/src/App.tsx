import React, {useEffect, useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Login from "./components/Login";
import {Search} from "./components/Search";
import {Route, Routes, useNavigate} from "react-router-dom";
import {CreateSong} from "./components/CreateSong";
import {Container} from "react-bootstrap";
import {SimilarSong} from "./components/SimilarSong";
import {SongInput} from "./types.generated";
import {useLazyQuery} from "@apollo/client";
import {
    GetSimilarSongDocument,
    GetSimilarSongQuery, GetSimilarSongQueryVariables,
    GetSongByNameDocument,
    GetSongByNameQuery,
    GetSongByNameQueryVariables
} from "./api/Queries.generated";
import {AllSongs} from "./components/AllSongs";

function App() {
    
    const [songName, setSongName] = useState("");
    const [songData, setSongData] = useState<SongInput>();
    const [similarSongData, setSimilarSongData] = useState<GetSimilarSongQuery | undefined>() ;
    const navigate = useNavigate()
    const [getSong, {
        data: getSongData,
    }] = useLazyQuery<GetSongByNameQuery, GetSongByNameQueryVariables>(GetSongByNameDocument, {
        variables:{
            name : songName
        },
    })
    const [similar, {
        data: getSimilarSongData
    }] = useLazyQuery<GetSimilarSongQuery, GetSimilarSongQueryVariables>(GetSimilarSongDocument)
    
    useEffect(() => {
        if(songName.length !== 0){
            getSong({
            }).then(r =>
            {
                if (r.error){
                    navigate('/CreateSong');
                    
                }else{
                    similar({
                        variables: {
                            name: r.data!.byName.data.songName,
                            mood: r.data!.byName.data.mood,
                            speed: r.data!.byName.data.speed,
                            instrumental: r.data!.byName.data.instrumental,
                            vocal: r.data!.byName.data.vocal
                         }
                    }).then(r =>{
                        setSimilarSongData(r.data);
                    });
                    setSongData({
                        songName: r.data!.byName.data.songName,
                        mood: r.data!.byName.data.mood,
                        speed: r.data!.byName.data.speed, 
                        instrumental: r.data!.byName.data.instrumental,
                        vocal: r.data!.byName.data.vocal});
                    navigate('/SimilarSong');
                }
                
            });
        }
    }, [songName])
    
    return(
        <Container>
            <Routes>
                <Route element={<CreateSong setSimilarSongData={setSimilarSongData} similar={similar} songData={songData} setSongData={setSongData} songName={songName} />}  path={"/CreateSong"} />
                <Route element={<Search songName={songName} setSongName={setSongName} />} path={'/Search'} /> 
                <Route element={<Login/>} path={'/'} />
                <Route element={<SimilarSong songName={songName} similarSongData={similarSongData} songData={songData}/>} path={'/SimilarSong'}/>
                <Route element={<AllSongs songName={songName} setSongName={setSongName}/>} path={'/AllSongs'}/>
            </Routes>
        </Container>
       )
}

export default App

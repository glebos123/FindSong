import React, {FC, Dispatch, useEffect} from "react"
import {Button, Container} from "react-bootstrap"
import {
    CreateSongDocument,
    CreateSongMutation,
    CreateSongMutationVariables,
} from "../api/Mutations.generated";
import {Exact, Instrumental, Mood, SongInput, Speed, Vocal} from "../types.generated";
import {LazyQueryExecFunction, useMutation} from "@apollo/client";
import { v4 as uuidv4 } from 'uuid';
import {useNavigate} from "react-router-dom";
import {GetSimilarSongQuery} from "../api/Queries.generated";

interface ISong{
    songData: SongInput | undefined,
    setSongData: Dispatch<SongInput>,
    setSimilarSongData: Dispatch<GetSimilarSongQuery | undefined>,
    songName : string,
    similar: LazyQueryExecFunction<GetSimilarSongQuery, Exact<{name: string, mood: Mood, instrumental: Instrumental, vocal: Vocal, speed: Speed}>>

}

export const CreateSong: FC<ISong> = React.memo((
    {
        songData,
        setSongData,
        songName,
        setSimilarSongData,
        similar
    }) => {
    
    const navigate = useNavigate();
    
    useEffect(()=>{
        if (songName.length == 0){
            navigate('/Search');
        }
        setSongData({songName: songName, id: uuidv4(), instrumental: Instrumental.Live, mood: Mood.Despair, vocal: Vocal.Vocal, speed: Speed.Slow});
    }, [songName])
    
    
    const onCreateSong = () => {
        createSong({
            variables: {
                song: {
                    songName: songData!.songName,
                    instrumental: songData!.instrumental,
                    vocal: songData!.vocal,
                    speed: songData!.speed,
                    mood: songData!.mood,
                    id: songData!.id
                }
            }
        }).then(r => {
            similar({
                variables: {
                    name: songData!.songName,
                    instrumental: songData!.instrumental,
                    vocal: songData!.vocal,
                    speed: songData!.speed,
                    mood: songData!.mood,   
                }
            }).then(r => {setSimilarSongData(r.data)});
            navigate("/SimilarSong")
            })
    }

   const [createSong] = useMutation<CreateSongMutation, CreateSongMutationVariables>(CreateSongDocument);
   
    return (
        <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
       
            <form>
                <div className="form-group">
                    <label>Song name</label>
                    <input disabled={true}  value={songName} type="text" className="form-control" id=""
                           placeholder="Song name"/>
                </div>
                <select className="form-select form-select-sm" aria-label=".form-select-sm example"
                onChange={(el?) => setSongData({...songData!,  mood: el.target.value as Mood})}
                     value={songData?.mood}
                >
                    <option value={Mood.Despair}>Отчаяние</option>
                    <option value={Mood.Fear}>Страх</option>
                    <option value={Mood.Energy}>Энергичкая</option>
                    <option value={Mood.Malice}>Злоба</option>
                    <option value={Mood.Yearning}>Тоска</option>
                    <option value={Mood.Melancholy}>Меланхолия</option>
                </select>
                <select className="form-select form-select-sm" aria-label=".form-select-sm example"
                        onChange={(el) => setSongData({...songData!, speed: el.target.value as Speed})}
                        value={songData?.speed}
                     
                >
                    <option value={Speed.Slow}>Медленная</option>
                    <option value={Speed.Middle}>Средняя</option>
                    <option value={Speed.Fast}>Быстрая</option>
                </select>
                <select className="form-select form-select-sm" aria-label=".form-select-sm example"
                        onChange={(el) => setSongData({...songData!, instrumental: el.target.value as Instrumental})}
                        value={songData?.instrumental}
                       
                >
                    <option value={Instrumental.Live}>Живая</option>
                    <option value={Instrumental.Electronic}>Электронная</option>
                    <option value={Instrumental.SemiElectronic}>Полу электронная</option>
                </select>
                <select className="form-select form-select-sm" aria-label=".form-select-sm example"
                        onChange={(el) => setSongData({...songData!, vocal: el.target.value as Vocal})}
                        value={songData?.vocal}
                >
                    <option value={Vocal.Vocal}>С вокалом</option>
                    <option value={Vocal.NoVocal}>Без вокала</option>
                </select>
                <Button onClick={onCreateSong} >
                    Создать
                </Button>
            </form>
        </Container>
    )
})
import React, {useState, useEffect, FC, Dispatch} from "react"
import {Button, Container, Form} from "react-bootstrap"
import SpotifyWebApi from "spotify-web-api-node"
import {TrackSearchResult} from "./TrackSearchResult";
import {useLocation, useNavigate} from "react-router-dom";

const spotifyApi = new SpotifyWebApi({
    clientId: "5a87b8656f2a470bb12590d2c59fea05",
})
interface ISearch{
    songName: string
    setSongName : Dispatch<string>
}

export const Search: FC<ISearch> = React.memo((
    {
        songName,
        setSongName
    }
    
) => {
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState<Array<any>>([])
    const navigate = useNavigate()
    const location = useLocation();
    
    function navigateToAllSongs(){
        navigate('/AllSongs')
    }
    
    useEffect(() => {

        if (location.pathname == "/Search"){
            setSongName('');
        }
        
        let token = localStorage.getItem("token")
        if (token !== null && search !== ""){
            spotifyApi.setAccessToken(token)
            spotifyApi.searchTracks(search).then(res => {
                if(res.statusCode !== 200){
                    localStorage.removeItem("token")
                    navigate("/")
                }
                if (res.body.tracks == undefined){
                    return
                }
                setSearchResults(
                   res.body.tracks.items.map(track => {
                        const smallestAlbumImage = track.album.images.find(
                            (smallest) => {
                                return smallest.height === 64 && smallest.width === 64
                            },
                           
                        )
                        return {
                            artist: track.artists[0].name,
                            title: track.name,
                            uri: track.uri,
                            albumUrl: smallestAlbumImage?.url,
                        }
                    })
                )
            })
        }
    }, [search, location])
    
    return (
        
        <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
            <Button onClick={navigateToAllSongs} >
                Показать созданные песни
            </Button>
            <Form.Control
                type="search"
                placeholder="Search Songs"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
                {searchResults.map(track => (
                    <TrackSearchResult
                        setSongName={setSongName}
                        track={track}
                        key={track.uri}
                    />
                ))}
            </div>
        </Container>
    )
})
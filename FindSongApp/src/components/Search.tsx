import React, {useState, useEffect, FC} from "react"
import { Container, Form } from "react-bootstrap"
import SpotifyWebApi from "spotify-web-api-node"
import {TrackSearchResult} from "./TrackSearchResult";
import useAuth from "./useAuth";

const spotifyApi = new SpotifyWebApi({
    clientId: "5a87b8656f2a470bb12590d2c59fea05",
})
interface ISearch{
    code: string
}

export const Search: FC<ISearch> = React.memo((
    {
        code
    }
    
) => {
    const accessToken = useAuth(code)
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState<Array<any>>([])

    function chooseTrack(track: any) {
        setSearch("")
    }

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return

        
        spotifyApi.searchTracks(search).then(res => {
           console.log(res);
           if (res.body.tracks == undefined){
               return
           }
            setSearchResults(
                res.body.tracks.items.map(track => {
                    const smallestAlbumImage = track.album.images.reduce(
                        (smallest, image) => {
                            //if (image.height < smallest.height) return image
                            return smallest
                        },
                        track.album.images[0]
                    )

                    return {
                        artist: track.artists[0].name,
                        title: track.name,
                        uri: track.uri,
                        albumUrl: smallestAlbumImage.url,
                    }
                })
            )
        })

        
    }, [search, accessToken])
    
    return (
        <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
            <Form.Control
                type="search"
                placeholder="Search Songs/Artists"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
                {searchResults.map(track => (
                    <TrackSearchResult
                        track={track}
                        key={track.uri}
                        chooseTrack={chooseTrack}
                    />
                ))}
            </div>
        </Container>
    )
})
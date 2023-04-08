import { useState, useEffect } from "react"
import axios from "axios"

export default function useAuth(code: string | null) {
    const [accessToken, setAccessToken] = useState()
        
    useEffect(() => {
        
        axios.post('https://accounts.spotify.com/api/token',
            "grant_type=client_credentials&client_id=5a87b8656f2a470bb12590d2c59fea05&client_secret=0dbf75d92efc44a0bd18fb3e0ffeac40",
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(res => {
                
                setAccessToken(res.data.access_token)
                
            })
            .catch(() => {
                console.log('sdfsdf')
                window.location.href = "/"
            })
    }, [code])
    
    return accessToken
}

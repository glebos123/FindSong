import {Button, Container} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";

// const AUTH_URL =
//     "https://accounts.spotify.com/authorize?client_id=5a87b8656f2a470bb12590d2c59fea05&response_type=code&redirect_uri=http://localhost:5173/callback&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
    const navigate =  useNavigate()
       function click() {
           axios.post('https://accounts.spotify.com/api/token',
               "grant_type=client_credentials&client_id=5a87b8656f2a470bb12590d2c59fea05&client_secret=0dbf75d92efc44a0bd18fb3e0ffeac40",
               {
                   headers: {
                       'Content-Type': 'application/x-www-form-urlencoded'
                   }
               }).then(r =>{
               localStorage.setItem('token', r.data.access_token);
               navigate('/Search')
           }  )
           
       }   
       
    return <Container>
        <Button className="btn btn-success btn-lg" onClick={click}>GET ACCESS</Button>
    </Container>
}
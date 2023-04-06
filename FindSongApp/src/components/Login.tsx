import React from "react";
import {Container} from "react-bootstrap";
import axios from "axios";

const {data} = await axios.post('https://accounts.spotify.com/api/token',
    "grant_type=client_credentials&client_id=5a87b8656f2a470bb12590d2c59fea05&client_secret=0dbf75d92efc44a0bd18fb3e0ffeac40",
    {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

export default function Login() {
    
    console.log(data)
    return <Container>
        <a className="btn btn-success btn-lg" href={data}>GET ACCESS</a>
    </Container>
}
import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Login from "./components/Login";
import {Search} from "./components/Search";
import {Route, Routes} from "react-router-dom";
import {Song} from "./components/Song";
import {Container} from "react-bootstrap";




function App() {
    const [song, setSong] = useState("");
    return(
        <Container>
            <Routes>
                <Route element={<Song song={song} setSong={setSong}/>}  path={"/Song"} />
                <Route element={<Search  setSong={setSong} />} path={'/Search'} /> 
                <Route element={<Login/>} path={'/'} />  
          
               
            </Routes>
            
        </Container>
       )
    
    
    
}

export default App

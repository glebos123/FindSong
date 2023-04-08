import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Login from "./components/Login";
import {Search} from "./components/Search";
import {Route, Routes} from "react-router-dom";
import {Song} from "./components/Song";


const code = new URLSearchParams(window.location.search).get("code");

function App() {
    return <Routes>
        <Route element={<Song/>} path={"/Song"} />
        code ? <Route element={<Search code={code} />} path={'/'} /> : <Route element={<Login/>} path={'/'} />
    </Routes>
    
    
    
}

export default App

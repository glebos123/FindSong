import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Login from "./components/Login";
import {Search} from "./components/Search";
import {Route, Routes} from "react-router-dom";


const code = new URLSearchParams(window.location.search).get("code");

function App() {
    return code ? <Search code={code} /> : <Login />
    
}

export default App

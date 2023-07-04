import React from "react";
import './style.scss'
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import Home from "./pages/home";
import Error from "./pages/error";
import About from "./pages/about";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Annonce from "./pages/annonce";



export default function App() {

    return (

        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} >
                </Route>
                <Route path="/about" element={<About/>}>
                </Route>
                <Route path="/annonce/:id" element={<Annonce/>}/>
                <Route path="/*" element={<Error/>}/>

            </Routes>
            <Footer/>
        </BrowserRouter>

    );
}

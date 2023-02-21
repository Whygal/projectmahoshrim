import React from 'react'
import {BrowserRouter ,Route, Routes} from "react-router-dom"
import Main from "../components/Main/Main"
import AskQuestion from "../components/AskQuestion/AskQuestion"
import VideoCorses from "../components/VideoCorses/VideoCorses"
import Tips from "../components/Tips/Tips"
import Contact from "../components/Contact/Contact"
import NotFound from "../components/NotFound/NotFound"
import About from '../components/About/About'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Pages = () => {
  return (
    <BrowserRouter>
         <Header/>
            <Routes>
               <Route path="/" element={<Main/>}/>
               <Route path="/Main" element={<Main/>}/>
               <Route path="/AskQuestion" element={<AskQuestion/>}/>
               <Route path="/VideoCorses" element={<VideoCorses/>}/>
               <Route path="/Tips" element={<Tips/>}/>
               <Route path="/Contact" element={<Contact/>}/>
               <Route path="/About" element={<About/>}/>
               <Route path="*" element={<NotFound/>}/>
            </Routes>
         <Footer/>
     </BrowserRouter>
  )
}

export default Pages
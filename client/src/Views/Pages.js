import React from 'react'
import {BrowserRouter ,Route, Routes} from "react-router-dom"
import Main from "../components/Main/Main"
import Question from "../components/Question/Question"
import VideoCorses from "../components/VideoCorses/VideoCorses"
import Tips from "../components/Tips/Tips"
import Contact from "../components/Contact/Contact"
import NotFound from "../components/NotFound/NotFound"

const Pages = () => {
  return (
    <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<Main/>}/>
                      <Route path="/Question" element={<Question/>}/>
                      <Route path="/VideoCorses" element={<VideoCorses/>}/>
                      <Route path="/Tips" element={<Tips/>}/>
                      <Route path="/Contact" element={<Contact/>}/>
                      <Route path="*" element={<NotFound/>}/>
                  </Routes>
            </BrowserRouter>
  )
}

export default Pages
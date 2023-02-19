import React from 'react'
import {BrowserRouter ,Route, Routes} from "react-router-dom"
import Main from "../components/Main/Main"
import AskQuestion from "../components/AskQuestion/AskQuestion"
import VideoCorses from "../components/VideoCorses/VideoCorses"
import Tips from "../components/Tips/Tips"
import Contact from "../components/Contact/Contact"
import NotFound from "../components/NotFound/NotFound"
import About from '../components/About/About'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import AnswerQuestion from '../components/AnswerQuestion/AnswerQuestion'
import PostQuestion from '../components/PostQuestion/PostQuestion'
import UserManager from '../components/UserManager/UserManager'
import Admin from '../components/Admin/Admin'

const Pages = () => {

  return (
            <BrowserRouter>
                            <Routes>
                                    <Route path="/Login" element={<Login/>}/>
                                    <Route path="/Register" element={<Register/>}/>
                                    <Route path="/" element={<Main/>}/>
                                    <Route path="/Question" element={<AskQuestion/>}/>
                                    <Route path="/VideoCorses" element={<VideoCorses/>}/>
                                    <Route path="/Tips" element={<Tips/>}/>
                                    <Route path="/Contact" element={<Contact/>}/>
                                    <Route path="/About" element={<About/>}/>
                                    <Route path="*" element={<NotFound/>}/>

                                    <Route path='/AnswerQuestion' element={<AnswerQuestion/>}/>
                                    <Route path="/postQuestion" element={<PostQuestion/>}/>
                                    
                                    <Route path="/UserManager" element={<UserManager/>}/>
                                    <Route path="/Admin" element={<Admin/>}/>
                            </Routes>
            </BrowserRouter>
  )
}

export default Pages
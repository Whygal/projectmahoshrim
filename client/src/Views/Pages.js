import React, { useContext, useState } from 'react'
import {Route, Routes, Outlet} from "react-router-dom"
import AskQuestion from "../components/AskQuestion/AskQuestion"
import Main from "../components/Main/Main"
import VideoCourses from "../components/VideoCourses/VideoCourses"
import Tips from "../components/Tips/Tips"
import Contact from "../components/Contact/Contact"
import NotFound from "../components/NotFound/NotFound"
import About from '../components/About/About'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import AnswerQuestion from '../components/AnswerQuestion/AnswerQuestion'
import PostQuestion from '../components/PostQuestion/PostQuestion'
import UserManager from '../components/UserManager/UserManager'
import Admin from '../components/Admin/Admin'
import SingleVideo from '../components/SingleVideo/SingleVideo'
import "./style.css"
import MyContext from '../Context'


const Pages = () => {
  
const [usernameLog, setUsernameLog] = useState("")
const [name, setName] = useState("")
const [userId, setUserId] = useState("")
const [isManager, setIsManager] = useState(false)
  return (
            <div className='views'>
            <div className='page'>
            <MyContext.Provider value={{name, isManager}}>
            <Header/>
            </MyContext.Provider>
                          <div className='pages'>
                            <Routes>
                                    <Route path="/Login" element={
                                    <MyContext.Provider value={{usernameLog, setUsernameLog, setName, setUserId, setIsManager}}>
                                    <Login/>
                                    </MyContext.Provider>
                                    }/>
                                    <Route path="/Register" element={<Register/>}/>
                                    <Route path="/VideoCourses" element={<VideoCourses/>}/>
                                    <Route path="/" element={<Main/>}/>
                                    <Route path="/AskQuestion" element={
                                    <MyContext.Provider value={{userId}}>
                                    <AskQuestion/>
                                    </MyContext.Provider>
                                    }/>
                                    <Route path="/Tips" element={<Tips/>}/>
                                    <Route path="/Contact" element={<Contact/>}/>
                                    <Route path="/About" element={<About/>}/>
                                    <Route path="*" element={<NotFound/>}/>
                                    <Route path="/Main" element={<Main/>}/>
                                    <Route path='/AnswerQuestion' element={<AnswerQuestion/>}/>
                                    <Route path="/postQuestion" element={<PostQuestion/>}/>
                                    <Route path="/UserManager" element={<UserManager/>}/>
                                    <Route path="/Admin" element={<Admin/>}/>
                                    <Route path="/SingleVideo/:id" element={<SingleVideo/>}/>
                            </Routes>
                          </div>
                  <Footer />
                  </div>
                  </div>  
  )
}


export default Pages;

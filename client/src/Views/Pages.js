import React, {useState} from 'react'
import MyContext from '../Context'
import {Route, Routes} from "react-router-dom"
import AskQuestion from "../components/AskQuestion/AskQuestion"

import LastQuestion from "../components/LastQuestion/LastQuestion"
import "./style.css"
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
import ChangePass from '../components/ChangePass/ChangePass'
import {EmailJs} from '../components/EmailJs/EmailJs'


const Pages = () => {

  const [username, setUsername] = useState("")


  return (
          <MyContext.Provider value={{username, setUsername}}>
            <div className='views'>
            <div className='page'>
            <Header/>
                          <div className='pages'>
                            <Routes>
                                    <Route path="/Login" element={<Login/>}/>
                                    <Route path="/Register" element={<Register/>}/>
                                  
                                    <Route path="/" element={<Main/>}/>
                                    <Route path="/AskQuestion" element={<AskQuestion/>}/>
                                    <Route path="/LastQuestion" element={<LastQuestion/>}/>
                                    <Route path="/ChangePass" element={<ChangePass/>}/>
                                    {/* <Route path="/VideoCourses" element={<VideoCourses/>}/> */}
                                    <Route path="/Tips" element={<Tips/>}/>
                                    <Route path="/Contact" element={<Contact/>}/>
                                    <Route path="/EmailJs" element={<EmailJs/>}/>
                                    <Route path="/About" element={<About/>}/>
                                    <Route path="*" element={<NotFound/>}/>
                                    <Route path="/Main" element={<Main/>}/>
                                    <Route path='/AnswerQuestion' element={<AnswerQuestion/>}/>
                                    <Route path="/postQuestion" element={<PostQuestion/>}/>
                                    <Route path="/UserManager" element={<UserManager/>}/>
                                    <Route path="/Admin" element={<Admin/>}/>
                            </Routes>
                          </div>
                  <Footer />
                  </div>
                  </div>  
          </MyContext.Provider>
  )
}

export default Pages;

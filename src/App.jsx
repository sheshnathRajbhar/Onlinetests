import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Courses from './pages/Courses'
import CourseDetails from './components/CourseDetails'
import CourseDetails2 from './components/CourseDetails2'
import CourseDetails3 from './components/CourseDetails3'
import CourseDetails4 from './components/CourseDetails4'
import Testpage from './pages/Testpage'

import Certificate from './pages/Certificate'
import Contact from './pages/Contact'


const App = () => {
  return (
    <div>
      <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Courses" element={<Courses/>}/>
      <Route path="/CourseDetails" element={<CourseDetails/>}/>
      <Route path="/CourseDetails2" element={<CourseDetails2/>}/>
      <Route path="/CourseDetails3" element={<CourseDetails3/>}/>
       <Route path="/CourseDetails4" element={<CourseDetails4/>}/>
         <Route path="/Testpage" element={<Testpage/>}/>
    
           <Route path="/Certificate" element={<Certificate/>} />
            <Route path="/Contact" element={<Contact/>} />
       
      
    </Routes>
    <Footer/>
    </div>
  )
}

export default App

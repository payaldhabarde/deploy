import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Portfolio from './Components/Portfolio'
import Project from './Components/Project'
import TeckSkills from './Components/TeckSkills'

function App() {
  
  return (
    <>
<Routes>
<Route path='/' element={<Portfolio/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/Project' element={<Project/>}/>
  <Route path='/TeckSkills' element={<TeckSkills/>} />
  
</Routes>
</>
   
  )
}
export default App

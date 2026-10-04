import { useState } from 'react'
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom' 
import Dashboard from "./pages/Dashboard"
import Exam from "./pages/Exam"
import Results from "./pages/Results"


import './App.css'

function App() {


  return (
   <>
<BrowserRouter>
<Routes>
  <Route path='/' element = {<Navigate to ="/dashboard" replace></Navigate>}> </Route>
    <Route path = "/exam/:SectionId" element={<Exam/>}></Route>
    <Route path = "/results" element={<Results/>}></Route>
    <Route path = "/dashboard" element={<Dashboard/>}></Route>

 
</Routes>
</BrowserRouter>

   
   
   </>
  )
}

export default App

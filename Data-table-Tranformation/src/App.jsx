import { useState } from 'react'
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Transform from './pages/Transform'


function App() {

  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'
      element = {<Navigate to= "/datasets/:id/transform" replace></Navigate>}></Route>
      <Route path ="/datasets/:id/transform"
      element={<Transform/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

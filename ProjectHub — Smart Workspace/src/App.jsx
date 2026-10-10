import {BrowserRouter,Routes,Route} from "react-router-dom";

function Dashboard (){
  return <h1> Project Dashboard </h1>
}

function ProjectDetails(){
  return <h1>Project Details Page </h1>
}

function App() {

  return (
   <>
   <BrowserRouter>
   <Routes>

    <Route path="/projects" element={<Dashboard/>}/>
    <Route path ="/projects/:id"  element={<ProjectDetails/>}  />

   </Routes>
   
   </BrowserRouter>
   
   </>
  )
}

export default App

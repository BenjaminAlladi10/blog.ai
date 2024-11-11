import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'

function App() {
  
  return (
      <>
      hi
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element= {<Signup/>}></Route>
          <Route path="/signin" element= {<Signin/>}></Route>
          <Route path="/Blog/:id?" element = {<Blog/>}></Route>
        </Routes>
      </BrowserRouter>
      </>
  )
}

export default App

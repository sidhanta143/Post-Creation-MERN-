import React from 'react'
import Home from "./Pages/Home.jsx"
import {BrowserRouter as Router,Route,Routes, BrowserRouter,} from 'react-router-dom'
import Feed from './Pages/Feed.jsx'
const App = () => {
  return (
<div>
  
  <Home/>
  <Feed/>
</div>

  )
}

export default App

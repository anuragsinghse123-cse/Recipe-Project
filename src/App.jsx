import React from 'react'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router'
import NotFound from './pages/NotFound'
import RecipeDetail from './pages/RecipeDetail.jsx'
function App() {
  return (
    <div  className="min-h-screen bg-background text-text font-sans">
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recipe/:id' element = {<RecipeDetail/>}/>
      <Route path ='*' element = {<NotFound/>}/>
    </Routes>
    </div>
  )
}

export default App

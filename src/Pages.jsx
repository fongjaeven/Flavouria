import React from 'react'
import App from './App'
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Searched from './Searched'
import Recipe from './Recipe'

function Pages() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/search/:search" element={<Searched/>}/>
            <Route path="recipe/:id" element={<Recipe/>}/>
        </Routes>
    </BrowserRouter>
    
  )
}

export default Pages
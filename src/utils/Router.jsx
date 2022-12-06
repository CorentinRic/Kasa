import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Lodging from '../pages/Lodging'
import Error from '../pages/Error'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="lodging/:id" element={<Lodging />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  )
}

export default Router
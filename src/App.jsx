import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cards from './components/Card'
import Products from './pages/Products'
import Header from './components/Header'


function App() {
  return (
    <div className='container flex flex-col mx-auto'>
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/cards' element={<Cards></Cards>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
      </Routes>
    </div>
  )
}

export default App

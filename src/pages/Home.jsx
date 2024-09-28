import React from 'react'
import Header from '../components/Header'
import './Home.css'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    function handleProduct(){
        navigate('/products')
    }
  return (
    <div>
      <Header></Header>
      <div className="hero">
        <div className="text">
            <h1 className='title'>We are changing the way people shop</h1>
            <h4 className='lorem'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</h4>
            <button className='btn' onClick={handleProduct}>OUR PRODUCTS</button>
        </div>
      </div>
    </div>
  )
}

export default Home

import React from 'react'
import {Link} from 'react-router-dom'
import '../index'

const Home = () => {
  return (
    <div>
    <center>
    <h2>Welcome to Home Page</h2>
    <Link to="/Home" className='Link'>Home Page</Link>
    <Link to='/About' className='Link'>About Page</Link>
    <Link to="/App" className='Link'>App Page</Link>
    </center>
    </div>
  )
}

export default Home
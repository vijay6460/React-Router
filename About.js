import React from 'react'
import {Link} from 'react-router-dom'
import '../index'
const About = () => {
  return (
    <div>
    <center>
    <h3>Welcome to the About Page</h3>
    <Link to="/Home" className='Link'>Back to Home</Link>
    </center>
    </div>
  )
}

export default About
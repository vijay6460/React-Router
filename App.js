import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Router/Home'
import About from './Router/About'
import {Link} from 'react-router-dom'
import './index.css'
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/Home' element={<Home />} />
                    <Route path='/About' element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App
import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import './sec1.css'
import Searchsec from '../../components/Searchsect/Searchsec.jsx'

const Sec1 = () => {
  return (
    <div className='fpsec1'>
    <Navbar />
    <Searchsec className='searchsec'/>
    </div>
  )
}

export default Sec1    
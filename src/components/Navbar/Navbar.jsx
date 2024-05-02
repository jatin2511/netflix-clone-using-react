import React from 'react'
import './Navbar.css'
import LanguageSelector from '../Langdropdown/LanguageSelector.jsx'
import Signbutton from '../Signbutton/Signbutton.jsx'

const navbar = () => {
  return (
    <div className='navbar'>
       <div>
        <img src={require('../../assets/netflixlogo.png')} alt="logo" style={{height:'4rem'}}/>
       </div>
       <div className='langsign'>
        <LanguageSelector />
         <Signbutton />
       </div>
    </div>
  )
}

export default navbar
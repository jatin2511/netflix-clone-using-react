import React from 'react'
import Sec1 from '../../sections/Frontpage/Sec1.jsx'
import Sec2 from '../../sections/Frontpage/Sec2.jsx'
import './frontpage.css'
function Frontpage() {
  return (
    <div>
        <Sec1 />
        <div className='divider'></div>
        <Sec2 />
    </div>
  )
}

export default Frontpage
import React from 'react'
import './Sec2.css'
const Sec2 = () => {
  return (
    <div id='sec2'>
     <div id='leftsec2'>
        <div id='enjoytv'>Enjoy on your TV</div>
        <div id='wat'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</div>
     </div>
     <div id='rightsec2'>
        <img src={require('../../assets/tv.png')} alt='tvimage' id='tvimg' / >
        <video controls loop autoPlay muted src={require('../../assets/video-tv-in-0819.mp4')} id='scrrec'/>
     </div>
    </div>
  )
}

export default Sec2
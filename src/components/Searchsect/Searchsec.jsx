import React from 'react'
import Getstarted from '../Getstarted/Getstarted'
import './searchsec.css'

const Searchsec = () => {
  return (
    <div className='searchsec'>
        <div id='unl'>Unlimited movies, TV shows and more</div>
        <div id='wat'>Watch anywhere. Cancel anytime.</div>
        <div id='red'>Ready to watch? Enter your email or mobile number to create or restart your membership.</div>
        <div id='inp'>
            <input id='inp1' placeholder='Enter email or phone number'></input>
            <Getstarted />
        </div>
    </div>
  )
}

export default Searchsec
import React, { useState } from 'react'
import "./coursel.css"
import Baseballoff from './BASEBALL_OFF.png'
import Cricketoff from './CRICKET_OFF.png'
import Softballoff from './SOFT_OFF.png'
import Baseballon from './BASEBALL_ON.png'
import Cricketon from './CRICK_ON.png'
import Softballon from './SOFT_ON.png'

function Coursel() {

  const [bon,setBon] = useState(false);
  const [con,setCon] = useState(false);
  const [son,setSon] = useState(false);
  return (
    <div className='coursel'>
      <div onMouseEnter={() => setBon(true)} onMouseLeave={() => setBon(false)} className='baseball container'>
        <a href='#'>{!bon ? (
          <img className='off' src={Baseballoff} alt='baseball'></img>) :
          (<img className='on' src={Baseballon} alt='baseball'></img>)}
        </a>
      </div>
      <div onMouseEnter={() => setCon(true)} onMouseLeave={() => setCon(false)}  className='cricket container'>
        <a href='#'>{!con ? (
          <img className='off' src={Cricketoff} alt='cricket'></img>) :
          (<img className='on' src={Cricketon} alt='cricket'></img>)}
        </a>
      </div>
      <div onMouseEnter={() => setSon(true)} onMouseLeave={() => setSon(false)} className='softball container'>
        <a href='#'>{!son ? (
          <img className='off' src={Softballoff} alt='softball'></img>):
          (<img className='on' src={Softballon} alt='softball'></img>)}
        </a>
      </div>
    </div>
  )
}

export default Coursel
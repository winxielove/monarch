import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Monarch from './Classes/Monarch'
import Butterfly from './Components/Butterfly'
import Stage from './Components/Stage'
const Scene = () => {


    const canvasRef = useRef()
    const cockRef = useRef()

    const [butterflies, setButterflies] = useState(
        () => {
            var bt = Array(10).fill("b")
            var i = 0;
            bt.forEach(() => {
                bt[i] = new Monarch(window)
                i++;
            })
            return (
                bt
            )
        }
    )
    

  return (
    <div className='scene'>

        
        <Stage canvasRef={canvasRef} obj={butterflies} cockRef={cockRef}/>

        <canvas className='stage' ref={canvasRef} width={window.innerWidth} height={window.innerHeight}/>

        <img src="assets/cock.png" alt="" style={{display: "none", width: "50px", height: "50px"}} ref={cockRef}/>

    </div>
  )
}

export default Scene
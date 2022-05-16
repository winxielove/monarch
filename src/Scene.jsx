import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Monarch from './Classes/Monarch'
import Butterfly from './Components/Butterfly'
import Stage from './Components/Stage'
const Scene = () => {


    const canvasRef = useRef()

    const [butterflies, setButterflies] = useState(
        () => {
            var bt = Array(100).fill("b")
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

        
        <Stage canvasRef={canvasRef} obj={butterflies}/>

        <canvas className='stage' ref={canvasRef} width={window.innerWidth} height={window.innerHeight}/>

    </div>
  )
}

export default Scene
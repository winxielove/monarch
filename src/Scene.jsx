import React from 'react'
import { useState, useEffect } from 'react'
import Monarch from './Classes/Monarch'
import Butterfly from './Components/Butterfly'
const Scene = () => {
    const [butterflies, setButterflies] = useState(
        () => {
            var bt = Array(50).fill("b")
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

        {butterflies.map((b) => {
            return (
                <Butterfly b={b}/>
            )
        })}

    </div>
  )
}

export default Scene
import React, { useRef, useEffect, useState } from 'react'

const Butterfly = (props) => {
    const {b} = {...props}
    const elm = useRef()
    const ctn = useRef()
    const [data, setData] = useState([])

    const mm = (e) => {
        
        var ang = (Math.atan( (e.pageY - b.y) / (e.pageX - b.x)) * 180) / Math.PI;

        ctn.current.style.transform = `rotate(${ang + 90 + (e.pageX >= b.x ? 0 : 180)}deg)`
      }

    useEffect(() => {
      document.addEventListener("mousemove", mm)
      return () => {
        document.removeEventListener("mousemove", mm)
      } 
    }, ["lsadjflaksdjf"])
    

  return (
    <h1 style={{transform: `translate(calc(${b.x}px - 50%), calc(${b.y}px - 50%))`}}
        className="butterfly noselect"
        ref={elm}
    >
        <span ref={ctn} className="monarch">
            🦋
        </span>
    </h1>
  )
}

export default Butterfly
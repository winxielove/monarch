import React, { useRef, useEffect, useState } from 'react'

const Butterfly = (props) => {
    const {b} = {...props}
    const elm = useRef()
    const ctn = useRef()
    const [data, setData] = useState([])
    

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
import React, { useEffect, useState, useRef } from 'react'

const rainbowColors = ["#ff0000","#ff8700","#ffd300","#deff0a","#a1ff0a","#0aff99","#0aefff","#147df5","#580aff","#be0aff"]

const Stage = ({canvasRef, obj, cockRef}) => {

    const [glInterval, setGlInterval] = useState()
    const mousePos = useRef()
    const cock = useRef()

    const GameLoop = (ctx) => {
        var i = 0;
        return (setInterval(() => {
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
            obj.forEach((o) => {
                if (mousePos.current) {
                    ctx.translate(o.x, o.y)
                    ctx.rotate((Math.abs((mousePos.current.pageY <= o.y ?
                        (mousePos.current.pageX >= o.x ? (90) : (0))
                        :
                        (mousePos.current.pageX >= o.x ? (0) : (90))
                    ) - Math.atan(
                    ((o.y >= mousePos.current.pageY) ? o.y - mousePos.current.pageY : mousePos.current.pageY - o.y)
                    
                    /

                    ((o.x >= mousePos.current.pageX) ? o.x - mousePos.current.pageX : mousePos.current.pageX - o.x)
                        
                    ) * (180/Math.PI)) + (mousePos.current.pageY <= o.y ?
                        (mousePos.current.pageX >= o.x ? (0) : (270))
                        :
                        (mousePos.current.pageX >= o.x ? (90) : (180))  
                    )) * (Math.PI / 180));
                }
                ctx.strokeStyle = rainbowColors[i]
                ctx.font = '30px serif';
                ctx.textBaseline = "bottom"
                ctx.fillText("🦋",
                ((mousePos.current == undefined) ? o.x : 0 - Math.floor(ctx.measureText("🦋").width / 2)),
                ((mousePos.current == undefined) ? o.y : 0))
                if (mousePos.current) {
                    ctx.rotate(-(Math.abs((mousePos.current.pageY <= o.y ?
                        (mousePos.current.pageX >= o.x ? (90) : (0))
                        :
                        (mousePos.current.pageX >= o.x ? (0) : (90))
                    ) - Math.atan(
                    ((o.y >= mousePos.current.pageY) ? o.y - mousePos.current.pageY : mousePos.current.pageY - o.y)
                    
                    /

                    ((o.x >= mousePos.current.pageX) ? o.x - mousePos.current.pageX : mousePos.current.pageX - o.x)
                        
                    ) * (180/Math.PI)) + (mousePos.current.pageY <= o.y ?
                        (mousePos.current.pageX >= o.x ? (0) : (270))
                        :
                        (mousePos.current.pageX >= o.x ? (90) : (180))  
                    )) * (Math.PI / 180));
                    ctx.translate(-o.x, -o.y)

                }
            })
            i = (i > rainbowColors.length - 1 ? 0 : i + 1)
        }, 16))
    }

    const mm = (e) => {
        mousePos.current = e
      }

    useEffect(() => {
      
        var context = canvasRef.current.getContext("2d")

        if (glInterval == undefined) {
            setGlInterval(GameLoop(context))
        }

        document.addEventListener("mousemove", mm)
        return () => {
            document.removeEventListener("mousemove", mm)
            if (glInterval) {
                clearInterval(glInterval)
                setGlInterval(undefined)
            }
        } 

    }, [""])
    

    return (
        <></>
  )
}

export default Stage
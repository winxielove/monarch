import React, { useEffect, useState, useRef } from 'react'

const rainbowColors = ["#ff0000","#ff8700","#ffd300","#deff0a","#a1ff0a","#0aff99","#0aefff","#147df5","#580aff","#be0aff"]

const Stage = ({canvasRef, obj}) => {

    const mousePos = useRef()

    const GameLoop = (ctx) => {
        var i = 0;
        return (setInterval(() => {
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
            obj.forEach((o) => {
                if (mousePos.current) {
                    if (o.x + 200 > mousePos.current.pageX && mousePos.current.pageX > o.x - 200
                        &&
                        o.y + 200 > mousePos.current.pageY && mousePos.current.pageY > o.y - 200
                        ) {
                        ctx.beginPath();
                        ctx.moveTo(o.x, o.y)
                        ctx.lineTo(mousePos.current.pageX, mousePos.current.pageY)
                        ctx.stroke();
                        ctx.moveTo(-o.x, -o.y)
                    }
                }
                // if (mousePos.current) {
                //     ctx.translate(o.x, o.y)
                //     ctx.rotate(Math.acos( (mousePos.current.pageY - o.y) / (mousePos.current.pageX - o.x)) * 180);
                // }
                // ctx.strokeStyle = rainbowColors[i]
                // ctx.fillRect(o.x - 5, o.y - 5, 10, 10)
                // if (mousePos.current) {
                //     ctx.rotate((Math.acos( (mousePos.current.pageY - o.y) / (mousePos.current.pageX - o.x)) * 180) * -1);
                //     ctx.translate(-o.x, -o.y)
                // }
            })
            i = (i > rainbowColors.length - 1 ? 0 : i + 1)
        }, 16))
    }

    const mm = (e) => {
        mousePos.current = e
      }

    useEffect(() => {
      
        var context = canvasRef.current.getContext("2d")

        var gl = GameLoop(context)

        document.addEventListener("mousemove", mm)
        return () => {
            document.removeEventListener("mousemove", mm)
            clearInterval(gl.ref)
        } 

    }, [""])
    

    return (
        <></>
  )
}

export default Stage
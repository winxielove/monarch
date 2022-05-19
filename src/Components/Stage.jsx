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
                var closest = [...obj].sort((a, b) => {
                    var ascore = Math.sqrt(Math.pow((o.x >= a.x ? o.x - a.x : a.x - o.x), 2) + Math.pow((o.y >= a.y ? o.y - a.y : a.y - o.y), 2))
                    var bscore = Math.sqrt(Math.pow((o.x >= b.x ? o.x - b.x : b.x - o.x), 2) + Math.pow((o.y >= b.y ? o.y - b.y : b.y - o.y), 2))
                    return ascore - bscore
                })
                var closest1 = closest[1]
                var closest2 = closest[2]

                var closestWall = {}
                if (
                (window.innerHeight - o.y < window.innerHeight / 2 ? window.innerHeight - o.y : o.y)
                <
                (window.innerWidth - o.x < window.innerWidth/2 ? window.innerWidth - o.x : o.x)
                ) {
                    closestWall = {x: o.x, y: (window.innerHeight - o.y < window.innerHeight / 2 ? window.innerHeight : 0 )}
                } else {
                    closestWall = {x: (window.innerWidth - o.x < window.innerWidth / 2 ? window.innerWidth : 0 ), y: o.y}
                }
                // ctx.font = '30px serif';
                // ctx.textBaseline = "bottom"
                // ctx.fillText("🦋", o.x - Math.floor(ctx.measureText("🦋").width / 2), o.y)

                ctx.fillRect(o.x - 5, o.y - 5, 10, 10)

                var hypot1 = Math.sqrt(Math.pow((o.x >= closest1.x ? o.x - closest1.x : closest1.x - o.x), 2) + Math.pow((o.y >= closest1.y ? o.y - closest1.y : closest1.y - o.y), 2))
                var hypot2 = Math.sqrt(Math.pow((o.x >= closest2.x ? o.x - closest2.x : closest2.x - o.x), 2) + Math.pow((o.y >= closest2.y ? o.y - closest2.y : closest2.y - o.y), 2))
                var hypotw = Math.sqrt(Math.pow((o.x >= closestWall.x ? o.x - closestWall.x : closestWall.x - o.x), 2) + Math.pow((o.y >= closestWall.y ? o.y - closestWall.y : closestWall.y - o.y), 2))

                if (o.x !== closest1.x)
                {
                    o.x = o.x + ((o.x > closest1.x ? 2 / hypot1 : -( 2 / hypot1)) + (o.x > closest2.x ? 2 / hypot2 : -( 2 / hypot2)) + (o.x > closestWall.x ? 2 / hypotw : -( 2 / hypotw))) * 100
                }
                if (o.y !== closest1.y)
                {
                    o.y = o.y + ((o.y > closest1.y ? 2 / hypot1 : -( 2 / hypot1)) + (o.y > closest2.y ? 2 / hypot2 : -( 2 / hypot2)) + (o.y > closestWall.y ? 2 / hypotw : -( 2 / hypotw))) * 100
                }
            })
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
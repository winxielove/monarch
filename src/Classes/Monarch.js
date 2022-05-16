export default class Monarch {
    constructor(window) {
        this.x = Math.floor(Math.random() * window.innerWidth)
        this.y = Math.floor(Math.random() * window.innerHeight)
    }
    getCoordinates() {
        return [this.x, this.y]
    }
    tick (ctx) {
        console.log(ctx)
        ctx.fillStyle = "red";
        ctx.flllRect(this.x - 5, this.y - 5, 10, 10)
    }
}
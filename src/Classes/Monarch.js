export default class Monarch {
    constructor(window) {
        this.x = Math.floor(window.innerWidth * Math.random())
        this.y = Math.floor(window.innerHeight * Math.random())
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
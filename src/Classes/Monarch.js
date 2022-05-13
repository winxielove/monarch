export default class Monarch {
    constructor(window) {
        this.x = Math.floor(Math.random() * window.innerWidth)
        this.y = Math.floor(Math.random() * window.innerHeight)
    }
    getCoordinates() {
        return [this.x, this.y]
    }
}
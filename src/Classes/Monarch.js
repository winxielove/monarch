export default class Monarch {
    constructor(window) {
        this.x = Math.floor(window.innerWidth * Math.random())
        this.y = Math.floor(window.innerHeight * Math.random())
        this.multx = (Math.random() > .5 ? 1 : -1);
        this.multy = (Math.random() > .5 ? 1 : -1)
    }
}
// let instance: Grimpan | null = null;

class Grimpan{
    constructor(canvas: HTMLElement | null) {
        if (!canvas || !(canvas instanceof HTMLElement)) {
            throw new Error("Invalid canvas element provided.");
        }
    }
    initialize() {}
    initializeCanvas() {}
} 


export default new Grimpan(document.querySelector("canvas"));
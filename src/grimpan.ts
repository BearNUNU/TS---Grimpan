// let instance: Grimpan | null = null;

class Grimpan {
  private static instance: Grimpan
  constructor(canvas: HTMLElement | null) {
    if (!canvas || !(canvas instanceof HTMLElement)) {
      throw new Error('Invalid canvas element provided.')
    }
  }
  initialize() {}
  initializeCanvas() {}
  static getInstance() {
    if (this.instance) {
      this.instance = new Grimpan(document.querySelector('canvas'))
    }
    return this.instance
  }
}

Grimpan.getInstance

export default Grimpan

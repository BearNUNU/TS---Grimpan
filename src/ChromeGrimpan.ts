// let instance: Grimpan | null = null;

class ChromeGrimpan {
  private static instance: ChromeGrimpan
  constructor(canvas: HTMLElement | null) {
    if (!canvas || !(canvas instanceof HTMLElement)) {
      throw new Error('Invalid canvas element provided.')
    }
  }
  initialize() {}
  initializeCanvas() {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new ChromeGrimpan(document.querySelector('canvas'))
    }
    return this.instance
  }
}

export default ChromeGrimpan

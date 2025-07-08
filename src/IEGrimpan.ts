// let instance: Grimpan | null = null;

class IEGrimpan {
  private static instance: IEGrimpan
  constructor(canvas: HTMLElement | null) {
    if (!canvas || !(canvas instanceof HTMLElement)) {
      throw new Error('Invalid canvas element provided.')
    }
  }
  initialize() {}
  initializeCanvas() {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new IEGrimpan(document.querySelector('canvas'))
    }
    return this.instance
  }
}

export default IEGrimpan

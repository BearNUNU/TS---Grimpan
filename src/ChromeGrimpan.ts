// let instance: Grimpan | null = null;
import Grimpan from './AbstractGrimpan'

class ChromeGrimpan extends Grimpan {
  protected static override instance: Grimpan
  initialize() {}
  initializeCanvas() {}
  static override getInstance() {
    if (!this.instance) {
      this.instance = new ChromeGrimpan(document.querySelector('canvas'))
    }
    return this.instance
  }
}

export default ChromeGrimpan

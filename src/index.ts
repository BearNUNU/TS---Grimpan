import ChromeGrimpan from './ChromeGrimpan'
import Grimpan from './grimpan'
import IEGrimpan from './IEGrimpan'
import AbstractGrimpanFactory from './AbstractGrimpanFactory'

class ChromeGrimpanFactory extends AbstractGrimpanFactory {
  static override createGrimpan() {
    return ChromeGrimpan.getInstance()
  }
}

class IEGrimpanFactory extends AbstractGrimpanFactory {
  static override createGrimpan() {
    return IEGrimpan.getInstance()
  }
}

function main() {
  const grimpan = ChromeGrimpanFactory.createGrimpan()
}

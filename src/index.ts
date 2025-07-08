import ChromeGrimpan from './ChromeGrimpan'
import Grimpan from './grimpan'
import IEGrimpan from './IEGrimpan'
import AbstractGrimpanFactory from './AbstractGrimpanFactory'

class ChromeGrimpanFactory extends AbstractGrimpanFactory {
  override createGrimpan(): Grimpan {
    return ChromeGrimpan.getInstance()
  }
}

class IEGrimpanFactory extends AbstractGrimpanFactory {
  override createGrimpan(): Grimpan {
    return IEGrimpan.getInstance()
  }
}

function gripmpanFactory(type: string) {
  //simple factory
  if (type === 'ie') {
    return IEGrimpan.getInstance()
  } else if (type === 'chrome') {
    return ChromeGrimpan.getInstance()
  } else {
    throw new Error('Unsupported browser type')
  }
}

function main() {
  const grimpan = new ChromeGrimpanFactory.createGrimpan()
}

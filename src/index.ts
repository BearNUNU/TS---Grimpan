import ChromeGrimpan from './ChromeGrimpan'
import Grimpan from './grimpan'
import IEGrimpan from './IEGrimpan'

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
  gripmpanFactory('ie')
  gripmpanFactory('chrome')
}

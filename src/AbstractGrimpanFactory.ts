import Grimpan from './AbstractGrimpan'

abstract class AbstractGrimpanFactory {
  static createGrimpan() {
    return Grimpan.getInstance()
  } //추상 클래스에서 가져와야 한다
}

//TS- 일반 클래스가 abstract 클래스를 상속받을 수 있다. 대신 추상클래스에 있는 메소드는 무조건 override 해야한다.
export default AbstractGrimpanFactory

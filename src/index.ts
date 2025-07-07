import Grimpan from './grimpan'

console.log(Grimpan.getInstance() === Grimpan.getInstance()) // true

// 싱클턴은 외부에서 접근 가능하며, 객체가 단일로 생성되게 해야 한다.

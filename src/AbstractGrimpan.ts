// 여러 그림판의 공통점을 가져오면 좋다.

export default abstract class Grimpan {
  protected static instance: Grimpan
  protected constructor(canvas: HTMLElement | null) {
    if (!canvas || !(canvas instanceof HTMLElement)) {
      throw new Error('Invalid canvas element provided.')
    }
  }
  abstract initialize(): void
  abstract initializeCanvas(): void
  static getInstance() {}
}

//우선 타입만 선언 했다고 생각하면 된다. inferface로도 가능

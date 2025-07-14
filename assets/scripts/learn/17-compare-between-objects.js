// 객체 비교
// - 메모리(스택, 힙)
// - 변수를 정의하고 값을 할당한다는 것은 메모리에 기억
// - 기본 타입은 스택에 저장
// - 객체 타입은 힙에 저장
// - 기본 타입은 값 복사, 객체 타입은 값 참조(메모리 주소를 공유)

const obj1 = { a: 1, b: { c: 2} }
const obj2 = { a: 1, b: { c: 2} }
const obj3 = obj1

console.log(obj1 === obj2)
console.log(obj2 === obj3)
console.log(obj1 === obj3)
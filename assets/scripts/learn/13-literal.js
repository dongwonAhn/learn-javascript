// 개발자의 목적
// 1. 객체 생성
// 2. 숫자 생성

let myNum

// 숫자 리터럴
// 개발자가 원하는 일
myNum = 2025

// 숫자 객체 (생성자는 객체를 생성할 때 사용)
// 자바스크립트가 하는 일
myNum = new Number(2025).valueOf()

// 숫가 값 결과
console.log(myNum)

// 객체 리터럴을 사용 (쉽게 만들고 싶은데...)
// const heading1 = {
//   'font-weight': 200,
//   'font-size': '6.25rem',
// }

// 자바스크립트에서 객체를 생성하는 방법
// 생성자 함수를 사용해 객체를 생성 (어렵네...)
// const heading1 = new Object()
// heading1['font-weight'] = 200
// heading1['font-size'] = '2.65rem'
// console.log(heading1)


// 결과
// console.log(heading1)
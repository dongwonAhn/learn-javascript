// console.log('함수(Function)')

// ------------------------------------------------------

// 함수란?
// 특정 순서에 따라 작업이 실행되는 코드 묶음(블록)

// drawWater 함수 [
//   1. 빈 양동이 가져오기
//   2. 양동이 들고 우물로 이동하기
//   3. 우물에서 물 길어오기
//   4. 집으로 귀가하기
// ]

// drawWater 함수 부르기(call)
// drawWater 함수 부르기(call)
// drawWater 함수 r부르기(call)

// ------------------------------------------------------

// 함수 선언 (Function Declaration) 구문
function drawWater() {
  console.groupCollapsed('drawWater() 호출됨')
  console.log('1. 빈 양동이 가져오기')
  console.log('2. 양동이 들고 우물로 이동하기')
  console.log('3. 우물에서 물 길어오기')
  console.log('4. 집으로 귀가하기')
  console.groupEnd()
}

// ------------------------------------------------------

// 함수 사용 (Call Function)
// 재사용성 (Reusability)
// drawWater()

// 동사형태
// 함수를 "호출(실행)한다" 의미 - 약속된 규칙
// 함수기능()

// 함수 이름으로 기능을 유추해보세요.
// 직관적이고 쉬운 함수 이름이 잘 지어진 이름입니다!!!
// playMusic()
// stopMusic()
// pauseMusic()

// 적절하지 않은 함수 이름
// function return() {}
// function 2break() {}
// function conti    nue() {}
// function cla-----ss() {}
// function for() {}

// ------------------------------------------------------
// 함수 매개변수 (Function Parameters)

// 함수 밖에 있는 [ 전역 ] 변수 (global scope variables)
// 코드 실행 범위 어디서나 접근이 가능한 변수 
// let year = 4027

// 함수 선언
function writeDiary(
  year /*기본값 undefined */, 
  month /*기본값 undefined */, 
  day /*기본값 undefined */, 
  location /*기본값 undefined */
) {
  // 지역 변수 (함수 안에서만 사용 가능, local scope variable)
  let mood = '행복감!'

  console.log(year + '년 ' + month + '월 ' + day + '일에 ' + location + '에 다녀온 일기를 쓴다.')
}

// 함수 호출(실행)
// 일기쓰기(연도, 월, 일, 장소)
// 인수(arguments)
// writeDiary(2025, 6, 10, '서울 N 타워')
// writeDiary(2025, 7, 1, '부산 광안리 해수욕장')
// writeDiary(2025, 10, 30, '원주 디자인 뮤지엄')

// 변수(variables)에 아무런 값이 할당되지 않을 경우 기본값은 `undefined`이다.
// let day // undefined
// console.log(day) // undefined

// 매개변수(parameters)에 아무런 값이 할당되지 않을 경우 기본값은 `undefined`이다.
// writeDiary()

// --------------------------------------------------------------------------
// 함수의 반환문(return)
// --------------------------------------------------------------------------

function 더하기(숫자1, 숫자2) {
  // 브라우저 콘솔 패널에 숫자1 + 숫자2 계산된 값이 기록된다.
  // console.log('콘솔 패널에 출력된 계산 결과 =', 숫자1 + 숫자2)
  // 함수에서 처리(계산)된 값을 반환하려면 return 키워드가 필요하다.
  return 숫자1 + 숫자2
}

// 함수(기능)가 실행되어 값을 반환한다면 그 값을 변수에 기억하려 한다.
let 결과값 = 더하기(10, 9) // 19
// console.log('결과값 =', 결과값)

let 결과값2 = 더하기(결과값, 결과값)
// console.log(결과값2) // ???


// 함수는 실행될 수 있다.
// 함수는 실행되면 결과 값을 반환한다.
// 처리(계산)된 값을 반환할 때 return 키워드를 사용한다.

function 빼기(숫자1, 숫자2) {
  // 숫자1 = 10
  // 숫자2 = 4
  // 처리(계산)
  // 지역 변수 선언 계산된 값 할당
  let 결과값 = 숫자1 - 숫자2 // 10 - 4 = 6

  // 계산된 결과값을 반환
  return 결과값
}

// console.log(빼기(10, 4))
// console.log(빼기(24, 6))
// console.log(빼기(-9, 9))
// console.log(빼기(100, -24))
// console.log(빼기(66, 33))
// console.log(빼기(10_000, 50))

// -----------------------------------------------------
// console.log() vs. 함수의 return
// -----------------------------------------------------

function 곱하기(숫자1, 숫자2) {
  let 결과값 = 숫자1 * 숫자2 // 계산된 값
  // console.log(결과값)
  
  // 명시적 결과 반환
  // return 결과값

  // 암묵적 결과 반환
  // return undefined
}

function 화면에결과그리기() {
  const 화면에그릴숫자값 = 곱하기(10, 20) // undefined
  document.write(화면에그릴숫자값) // undefined -> 'undefined'
}

화면에결과그리기()


// 전역변수를 선언만하고 
// 함수 내부에서 정의할 경우에는 
// return을 사용할 필요 없이 
// 전역변수의 값이 변할 수 있는데 
// 이때에도 return이 없으면 
// 함수는 undefined를 반환하나요?

let y = '전역 변수'

function 함수() {
  // 전역 변수 변경
  y = 0

  // 아무런 값을 명시적으로 반환하지 않아요
  // return undefined
}

console.log(함수()) // undefined

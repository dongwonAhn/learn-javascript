// --------------------------------------------------------------------------
// 📌 조건문 - if ... else
// --------------------------------------------------------------------------

// 프로그래밍 조건문

// 조건 = "참 같은 값(Truthy)"으로 평가
// 조건 = "거짓 같은 값(Falsey)"으로 평가 
// 거짓 값은 값으로 평가되는 것들
// - false (boolean)
// - 0 (number)
// - '' (string)
// - null
// - undefined
// - NaN (숫자 + undefined)


let 신호등_색상 = 'green'
let 신호 = 'red'

if (신호등_색상 == 신호) {
  console.log('건너면 안돼요')
} else {
  console.log('좌우를 살피고 걸어요')
}


let isLightColorRed = false

if (isLightColorRed) {
  console.log('신호등 앞에서 멈춰야 합니다.')
} else {
  console.log('좌우를 살피고 건널목을 건넙니다.')
}

if (10-11) {
  console.log('신호등 앞에서 멈춰야 합니다.')
} else {
  console.log('좌우를 살피고 건널목을 건넙니다.')
}

// 불리언 타입 변경
console.log(Boolean(-1))
console.log(Boolean(0))
console.log(Boolean(-1))

console.log(Boolean(''))
console.log(Boolean(' '))
console.log(Boolean('hi'))

console.log(Boolean(true))
console.log(Boolean(false))

console.log(Boolean(null))
console.log(Boolean(undefined))

console.log(Boolean(Symbol('y9')))
console.log(Boolean(101n))

console.log(Boolean(() => {}))
console.log(Boolean({}))
console.log(Boolean([]))

if (-100) {
  console.log('this is truthy')
}


// 비교 연산자

x =10
y= 5

console.log(x == y)
console.log(x === y)
console.log(x != y)
console.log(x !== y)
console.log(x < y)
console.log(x <= y)
console.log(x > y)
console.log(x >= y)

// 자바스크립트는 상황에 따라 타입을 자동 변환

if(x == y) { console.log('this is truthy')}
if(x === y) { console.log('this is truthy')}
if(x != y) { console.log('this is truthy')}
if(x !== y) { console.log('this is truthy')}
if(x < y) { console.log('this is truthy')}
if(x <= y) { console.log('this is truthy')}
if(x > y) { console.log('this is truthy')}
if(x >= y) { console.log('this is truthy')}

// 개발자 작성
console.log(Boolean(24 == '24'))
// 자바스크립트 엔진 처리 (타입 자동 변환)
console.log(Boolean('24' == '24'))

// 개발자 작성
console.log(Boolean(24 === '24'))
// 자바스크립트 엔진 처리 (타입 변경 안함)
console.log(Boolean(24 === '24'))


let condition = true

// 조건 (참이다, 아니다)
if (condition) {}
else {}

let 신호등불빛색 = '보라색'

// 조건 1 (신호등 불이 빨간색)
if (신호등불빛색 === '빨간색') {
  console.log('건너면 안되요!')
} 
// 조건 2 (신호등 불이 노란색)
else if (신호등불빛색 === '노란색') {
  console.log('안전을 생각하면 그 자리에 멈추는 게 좋아요.')
}
// 조건 3 (신호등 불이 초록색)
else if (신호등불빛색 === '초록색') {
  console.log('좌우 살피고 건너세요!')
}
// 이도 저도 아니면...
else {
  console.log(신호등불빛색 + '은 신호등 불빛색 중에 없어요.')
}



// 신호등 예시에서

let lightColor = '노란색'
let car ='stop'

let 조건A = lightColor === '노란색'
let 조건Z = car === 'stop'

// 조건A 그리고(and, &&) 조건Z -> '안경도 썻고, 키도 컸어요.'
// 조건A 또는(or, ||) 조건Z  -> '안경을 썻거나, 키가 크거나.'

// 이런식으로 두 조건을 만족 해야만 
// true값이 나오게 하려면 어떻게 할까요...
// if(조건A && 조건Z) {
if(lightColor === '노란색' && car === 'stop') {
  console.log('차가 멈췄고, 신호등 불빛색이 노란색이니까 서둘러 이동합시다.')
}
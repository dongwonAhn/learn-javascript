// --------------------------------------------------------------------------
// 📌 함수 매개변수 기본값 설정 (조건문 활용)
// --------------------------------------------------------------------------

/*
function getMoney(price, unit) {
  // unit 매개변수(옵션)
  // 설정 가능한 값: '달러' 또는 '원화'
  // 기본 값: '원'
  if (unit === '달러' || unit === '$') {
    return '$' + price 
  } else {
    return price + '원'
  }
}

let moneyKR = getMoney(5000 + 2000 + 1500 + 500) // '9000원'
let moneyUS = getMoney(10.5 + 90 - 20 + 0.25, '$') // '$80.75'

console.log(moneyKR)
console.log(moneyUS)
*/

function getMoney(price, unit) {
  // 매개변수 타입 비교
  // if (unit === undefined) {

  // 매개변수 타입이 무엇인지 문자값으로 비교
  // if (typeof unit === 'undefined') {

  // 조건문 소괄호 안에서 조건이 평가 (Truthy or Falsey)
  // 평가 이후, 부정(NOT, !) 연산자로 평가 반전
  if (!unit) {
    unit = '원'
  }

  if (unit === '달러') {
    return '$' + price
  }

  return price + unit
}

let moneyKR = getMoney(5000 + 2000 + 1500 + 500) 
let moneyUS = getMoney(10.5 + 90 - 20 + 0.25, '달러') 

console.log(moneyKR) // '9000원'
console.log(moneyUS) // '$80.75'


// if문의 블록({})은 내부 코드가 한 줄이면 생략 가능
// 함수 내부에서 return 키워드를 확인하면 함수는 값을 반환하고, 함수를 종료

/*
function getMoney(price, unit) {
  if (!unit) unit = '원'
  if (unit === '달러') return '$' + price
  return price + unit
}

let moneyKR = getMoney(5000 + 2000 + 1500 + 500) 
let moneyUS = getMoney(10.5 + 90 - 20 + 0.25, '달러') 

console.log(moneyKR)
console.log(moneyUS)
*/
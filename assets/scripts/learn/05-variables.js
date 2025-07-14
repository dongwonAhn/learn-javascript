// 변수(Variables)

// ----------------------------------------------
// 의미없는 코드
// ----------------------------------------------

// 4 + 27 = 31
// console.log(31)
// console.log(4 + 27)

// ----------------------------------------------
// 의미있는 코드
// ----------------------------------------------

// 처음 가진 사과의 갯수 = 4
// 변수 선언 및 값 할당
// let 처음_가진_사과의_갯수 = 4
// console.log('처음_가진_사과의_갯수 = ', 처음_가진_사과의_갯수)
let initialApples = 4 // camelCase
console.log('initialApple =', initialApples)
let $initialApples = 4 // camelCase
console.log('$initialApple =', $initialApples)

// 잘못된 변수 이름
// 공백(' ')은 안돼요!
// let initial apples [❌]
// 첫글자가 숫자 안돼요!
// let 4people = '4명의 친구들' [❌]
// 하이픈(-) 기호 안돼요!
// let dark-impact = '다크 임팩트' [❌]
// 예약어(예: if, for, while, function, ...) 안돼요!
// let return = '회귀' [❌]

// 추가로 구매한 사과의 갯수 = 27
// let 추가로_구매한_사과의_갯수 = 27

// 변수 선언 (값 할당 없이)
let addBuyApples // 기본값 (undefined)
// let addBuyApples = undefined (암묵적)
console.log('addBuyApples =', addBuyApples) // undefined

// 선언된 변수에 값 할당
addBuyApples = 27
console.log('addBuyApples =', addBuyApples) // undefined -> 27

// console.log('추가로_구매한_사과의_갯수 = ', 추가로_구매한_사과의_갯수) // 27

// 현재 내가 가진 사과의 갯수 = 처음 가진 사과의 갯수 + 추가로 구매한 사과의 갯수
// let 현재_내가_가진_사과의_갯수 = 처음_가진_사과의_갯수 + 추가로_구매한_사과의_갯수
// console.log('현재_내가_가진_사과의_갯수 = ', 현재_내가_가진_사과의_갯수) // 4 + 27

// ---------------------------------------------------------------
// let 변수 vs. var 변수

// 블록 스코프(block scope)
// {
//     var myName
//     console.log(1, myName)

//     myName = 'yamoo9'
//     console.log(2, myName)
// }

// myName = 'y9'
// console.log(3, myName)

// {
//     let myName2
//     console.log(1, myName2)

//     myName2 = 'yamoo9'
//     console.log(2, myName2)
// }

// myName2 = 'y9'
// console.log(3, myName2)


// ---------------------------------------------------------------
// let 변수 vs. const 변수(상수, constant)
// - 변수 = 시간의 흐름에 따라 값이 변경됨
// - 상수 = 처음 선언 시, 할당된 값이 이후 변경되지 않음
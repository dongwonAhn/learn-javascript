// if … else 명령문을 사용하여 프로그램의 흐름을 제어하는 것은 매우 중요합니다.

// 1. 명호는 24살, 아현이는 27살, 재웅이는 41살입니다.

const 명호 = { 나이: 24 }
const 아현 = { 나이: 27 }
const 재웅 = { 나이: 41 }

//     1. 성현이의 나이를 설정합니다.
const 성현 = { 나이: 22 }

//     2. 성현이가 명호보다 어린지 확인하여 적절한 로그가 출력되도록 구성합니다.
if (성현.나이 < 명호.나이) {
  console.log('성현이가 명호한테 형이라고 해야지.')
}

성현.나이 = 성현.나이 + 10

//     3. 성현이가 아현이보다 나이가 많은 지 확인한 후, 그렇다면 로그를 출력하도록 작성합니다.
if (성현.나이 > 아현.나이) {
  console.log('성현이가 아현이보다 나이가 많으니 더 어른처럼 행동하자.')
}

console.log(성현.나이)

성현.나이 = 성현.나이 + 9 // 32 + 9 = 41

//     4. 성현이가 재웅이보다 나이가 많거나 같은 지 확인하기 위한 코드 또한 작성해보세요.
if (성현.나이 >= 재웅.나이) {
  console.log('성현이가 재웅이랑 나이가 같거나 형이던가?')
}

// 2. 다음 중, 거짓(falsey)으로 평가되는 것을 골라보세요.
console.log(Boolean(null))
console.log(Boolean(true))
console.log(Boolean(-1))
console.log(Boolean(undefined))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean({}))
console.log(Boolean(false))
console.log(Boolean(" "))
console.log(Boolean({ isHavingFun: true }))
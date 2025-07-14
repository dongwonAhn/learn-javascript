// --------------------------------------------------------------------------
// 📌 범위(Scope) 관리
// --------------------------------------------------------------------------

let globalScopeVariable = '글로벌 스코프(전역) 변수'

// let a = 'alpha'
// console.log(1, a)

;(() => {
  
  let functionScopeVariable = '함수 스코프(지역) 변수'
  console.log(functionScopeVariable)
  
  if (typeof globalScopeVariable === 'string') {
    let functionScopeVariable = '블록 스코프(지역) 변수'
    console.log(functionScopeVariable)
  }

})

// let a = 'beta'
// console.log(2, a)

;(() => {
  
  function announceWinner(name, prize = '플레이스테이션') {
    console.log(`${name} 승리를 축하합니다! 상품은 "${prize}"입니다.`)
  }

  console.log(announceWinner('지훈', '공유기'))
})

;(() => {
  let message = '초기 메시지'

  function updateMessage() {
    message = '업데이트된 메시지'
  }

  updateMessage()

  console.log(message) // ???
})

;(() => {
  function showUser() {
    const userName = '재민'
    return `사용자: ${userName}`
  }

  const info = showUser() + '님 접속'
  console.log(info)
})()
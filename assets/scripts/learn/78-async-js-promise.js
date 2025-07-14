// --------------------------------------------------------------------------
// 📌 Promise
// --------------------------------------------------------------------------

;(() => {

  // 판매 가능한 케이크 상자
  const salableCakes = [
    '스트로베리 초코 생크림',
    '아이스 망고',
    '블랙 포레스트',
    '초코 무스'
  ]
  
  // Promise란?
  // - JavaScript의 비동기 처리를 담당하는 객체
  // - 미래에 어떤 값을 반환할 것이라는 "약속"하는 객체
  // - 웹 브라우저 또는 Node.js 런타임 환경에서 모두 지원
  // - 초기 또는 보류(pending), 이행(fulfilled), 거절(rejected) 상태
  
  // 약속이 이행 또는 거절되기 전 상태
  const promise = buyCake('블랙 포레스트') // Promise <pending>

  // 약속이 이행(해결)된 상태
  // fulfilled | resolved
  // promise.then(() => {
  //   // 약속대로 블랙 포레스트 케익을 사왔다.
  // })

  // 약속이 거절된 상태
  // rejected
  // promise.catch(() => {
  //   // 약속이 지켜지지 않아 블랙 포레스트 케익을 사오지 않았다.
  // })

  // 메서드 체이닝
  promise
    // onFulfilled
    .then((celebrateMessage) => `${celebrateMessage} 👏👏👏👏👏👏`)
    .then((newCelebrateMessage) => '2025년 7월! ' + newCelebrateMessage)
    .then(console.log)
    // onRejected
    .catch((consolationMessage) => console.error(consolationMessage))

  // .then(onFulfilled, onRejected)
  // promise
  //   .then(
  //     // fulfilled
  //     (celebrateMessage) => console.log(celebrateMessage),
  //     // rejected
  //     (consolationMessage) => console.error(consolationMessage)
  //   )

  function buyCake(cakeName) {
    // 약속한 대로 케이크를 살 수 있나?
    const existCake = salableCakes.find((name) => name === cakeName)
  
    // Promise 객체 생성
    // - 비동기 처리하는 객체
    // - 미래에 어떤 값을 반환할 것을 약속하는 객체
    const promise = new Promise((resolve, reject) => {
      // if (existCake) {
      //   resolve(`${cakeName} 케익을 구매할 수 있었습니다. 🎂 😊`)
      // } else {
      //   reject(new Error(`${cakeName} 케익 재고가 없다네요. 아쉽게도 구매할 수 없었습니다. 😢 ⁉️`))
      // }
      
      // 비동기 처리
      // setTimeout 사용해 특정 시간 뒤에 resolve 또는 reject 함수 실행
      // 지연 시간
      const delayTime = Math.round(Math.random() * 5000)
      console.log(`지연 시간 = ${delayTime/1000}초`)

      setTimeout(() => {
        existCake 
          ? resolve(`${cakeName} 케익을 구매할 수 있었습니다. 🎂 😊`) 
          : reject(new Error(`${cakeName} 케익 재고가 없다네요. 아쉽게도 구매할 수 없었습니다. 😢 ⁉️`))
      }, delayTime)
    })
    
    // 생성된 Promise 객체 반환
    return promise
  }

})()

;(() => {

  const promise = fetch('https://api.github.com/users/yamoo9/repos')
  console.log(promise) // Promise {}

})
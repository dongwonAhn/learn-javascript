// --------------------------------------------------------------------------
// 📌 논리 연산자 식을 활용해 조건 처리
//    && "그리고(AND)"
//    || "또는(OR)"
// --------------------------------------------------------------------------

;(() => {
  
  let isLightGreen = false
  let noCarsAround = false

  if (isLightGreen || noCarsAround) {
    // 신호등 불빛이 초록불이거나, 주변에 차가 없다면? 건너라.
    walk()
  } else {
    // 그렇지 않다면? 멈춰라.
    stop()
  }

  function walk() {
    console.log('건너라.')
  }

  function stop() {
    console.log('멈춰라.')
  }

})


// && 논리곱 논리 연산자 (AND)
;(() => {
  
  let x, y

  x = '엑—스' // [true] or false -> Truthy
  y = NaN    // true or [false] -> Falsy or Falsey

  // && 연산자는 첫번째 Falsey(거짓으로 평가되는) 값을 찾는다.
  // console.log(1, x && y) 
  // console.log(2, y && x)

  // 논리 연산자 사용한 식
  let result1 = x && play()  // x가 참이면? play() 함수 실행 (이유: && 연산자는 첫번째 거짓으로 평가되는 값을 찾으니까)
  let result2 = y && study() // y가 참이면? study() 함수 실행 (반대로 말하면 y가 거짓이면 함수 실행은 없다.)

  console.log('1', result1) // ???
  console.log('2', result2) // ???

  function study() {
    return '우리는 함께 공부한다.'
  }
  
  function play() {
    return '우리는 다같이 논다.'
  }

})

// || 논리합 논리 연산자 (OR)
;(() => {

  const user = {
    name: '지훈',
    email: 'yamoo9@naver.com',
    isSigned: !true,
  }

  // ----------------------------------------
  // 조건문 (if...else 문)
  if (!user.isSigned) {
    signIn()
  } else {
    signOut()
  }
  // if (user.isSigned) signOut()
  // else signIn()

  // ----------------------------------------
  // 조건식 (3항 연산자 표현식)
  !user.isSigned ? signIn() : signOut() 

  // ----------------------------------------
  // 논리 연산자 식 (&&, ||)
  
  // user.isSigned // true or [false]
  // || 연산자는 첫번째 Truthy 값을 찾는다. (&& 연산자의 반대)
  user.isSigned || signIn()
  // && 연산자는 첫번째 Falsey 값을 찾는다. (|| 연산자의 반대)
  user.isSigned && signOut()
  
  function signIn() {
    console.log('로그인 합니다.')
  }

  function signOut() {
    console.log('로그아웃 되었습니다.')
  }

})

// 실습 1
;(() => {
  // 영화 관람 가능 여부 확인
  // 다음 조건을 모두 만족해야 영화관에 입장할 수 있습니다.
  // - 18세 이상 관람 가능
  // - 신분증 필수

  // canWatchMovie 함수 코드를 작성하세요. (논리 연산자 활용)

  function canWatchMovie(person) {
    let result

    // 논리 연산자 식
    // 논리곱(&&): 첫번째 거짓으로 평가되는 값을 찾아 반환
    // 논리합(||): 첫번째 참으로 평가되는 값을 찾아 반환

    // return (참인 값) && '관람 허용'
    // result = (person.age > 17 && person.idCard) && '관람 허용'
    if (person.age > 17 && person.idCard) {
      result = '관람 허용'
    } else {
      result = '관람 불가'
    }

    return result
  }

  const results = [
    canWatchMovie({ age: 21, idCard: true }),
    canWatchMovie({ age: 15, idCard: false }),
  ]

  console.log(results) // ['관람 허용', '관람 불가']

})()

// 실습 2
;(() => {
  
  function needUmbrella(condition) {
    if (condition.isRaining || condition.forecastRain) {
      return true 
    } else {
      return false
    }
  }

  const results = [
    needUmbrella({ isRaining: false, forecastRain: true }),
    needUmbrella({ isRaining: false, forecastRain: false }),
  ]

  console.log(results) // [true, false]

})()
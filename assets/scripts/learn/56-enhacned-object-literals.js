// --------------------------------------------------------------------------
// 📌 향상된 객체 리터럴 (Enhacned Object Literals)
// --------------------------------------------------------------------------

// 속성 할당 단축
;(() => {
  
  const nickname = '야무'
  const phone = 'Gallaxy'

  // nickname, phone 변수 값을 객체의 속성 값으로 할당하고자 한다.
  const instrcutor = { nickname, phone }
  console.log(instrcutor)

})

// 메서드 단축
;(() => {

  const instrcutor = { 
    nickname: '야무', 
    phone: '갤럭시',
    location: '서울',
    // introduction: function() {
    introduction() {
      let { nickname: name, phone, location } = this
      console.log(name, phone, location)
    }
  }

  instrcutor.introduction()

})

// 계산된 속성 이름
;(() => {
  
  let methodName = 'calculateMethod'
  let property = 'currentTime'

  const o = {
    [property]: '00:09:21',
    [methodName]() {
      console.log(`${methodName} time =`, this.currentTime)
    } 
  }

  o[methodName]()

  console.log(o.currentTime)
  console.log(o[property])
  

  // 객체 속성에 접근하는 표기법
  // - 점(.) 문법
  // - 대괄호([]) 문법

  // o.record
  // o['record']()

})()
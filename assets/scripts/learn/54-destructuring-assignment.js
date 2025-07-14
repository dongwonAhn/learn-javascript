// --------------------------------------------------------------------------
// 📌 구조 분해 할당 (Destructuring Assignment)
// --------------------------------------------------------------------------
// - 구조 분해 -> 지역 변수 할당

// 객체 구조 분해 할당
;(() => {
  
  const jeemin = {
    name: '박지민',
    age: 27,
  }

  // let name = jeemin.name
  // let age = jeemin.age

  // 구조 분해 할당 구문 (2015+)
  let { age, name } = jeemin // { name, age }

  console.log(name)
  console.log(age)

})

// 배열 구조 분해 할당
;(() => {
  
  const names = ['박현아', '최하송', '김주성']
  // console.log(names) // [0, 1, 2]

  // let firstName = names.at(0)
  // let secondName = names.at(1)
  // let lastName = names.at(-1)

  // 구조 분해 할당 구문
  let [ , , tName ] = names // [0, 1, 2]
  // let tName = names.at(-1)
  // let sName = names[1]
  console.log({ tName })

})

// 속성 할당 변수 이름 설정
;(() => {
  
  const jeemin = {
    name: '박지민',
    age: 27,
  }

  // 객체의 키(key) 값 이름으로 구조 분해 먼저 한 후,
  // 사용자가 원하는 지역 변수 이름으로 할당하는 것이 가능!
  let { age: myAge, name: nickname } = jeemin

  // let myAge = age
  // let nickname = name

  console.log(nickname)
  console.log(myAge)

})

// 함수 인수 구조 분해 할당
;(() => {
  
  function getSectionTemplate(section) {
    // 객체 구조 분해 할당 구문 사용
    let { headline, description: desc } = section /* { headline, description } */

    return `
      <section>
        <h2>${headline}</h2>
        <p>${desc}</p>
      </section>
    `
  }

  const sectionInfo = {
    headline: '구조 분해 할당',
    description: `
      배열 또는 객체 타입의 데이터는 구조 분해가 가능하므로, 
      구조를 분해해 지역 변수로 할당할 수 있다.
    `
  }

  const sectionTemplate = getSectionTemplate(sectionInfo)

  console.log(sectionTemplate)

})

// 함수 매개변수 구조 분해 할당
// 함수 인수 구조 분해 할당
;(() => {
  
  // 매개변수 영역에서 구조 분해 할당 가능
  function getSectionTemplate({ headline, description: desc }) {
    // 함수 몸체(Function Body)
    // let { headline, description: desc } = section

    return `
      <section>
        <h2>${headline}</h2>
        <p>${desc}</p>
      </section>
    `
  }

  const sectionInfo = {
    headline: '구조 분해 할당',
    description: `
      배열 또는 객체 타입의 데이터는 구조 분해가 가능하므로, 
      구조를 분해해 지역 변수로 할당할 수 있다.
    `
  }

  const sectionTemplate = getSectionTemplate(sectionInfo)

  console.log(sectionTemplate)

})

// 배열 타입 함수 매개변수 구조 분해 할당
;(() => {
  function rgbToHex(rgb) {
    // 배열 구조 분해 할당
    let [redValue, greenValue, blueValue] = rgb // [0, 1, 2]

    // let 변수는 재할당 가능 (mutation)
    redValue = redValue.toString(16)
    greenValue = greenValue.toString(16)
    blueValue = blueValue.toString(16)

    return `#${redValue}${greenValue}${blueValue}`
  }

  const colorHexCode = rgbToHex([255, 120, 120])
  console.log(colorHexCode)

})

// 배열 타입 함수 매개변수 영역에서 바로 구조 분해 할당
;(() => {
  function rgbToHex([redValue, greenValue, blueValue]) {
    redValue = redValue.toString(16)
    greenValue = greenValue.toString(16)
    blueValue = blueValue.toString(16)

    return `#${redValue}${greenValue}${blueValue}`
  }

  const colorHexCode = rgbToHex([255, 120, 120])
  console.log(colorHexCode)

})()

// 구조 분해 할당된 변수의 기본 값 설정
;(() => {
  
  // 배열 구조 분해 할당 기본 값 설정 예
  const emojiList = [
    '😎',
    '🤖'
  ]

  // 배열 구조 분해 할당
  const [fisrtEmoji, secondEmoji = '✌🏻'] = emojiList
  console.log(fisrtEmoji)
  console.log(secondEmoji)
  

  // 객체 구조 분해 할당 기본 값 설정 예
  const course = {
    name: 'JavaScript 펀더멘탈' 
  }

  // 객체 구조 분해 할당
  let { name, price = 30_000, instructor = '야무' } = course
  // if (price === undefined) price = 30000
  // if (instructor === undefined) instructor = '야무'

  console.log(name)
  console.log(price)
  console.log(instructor)

})()
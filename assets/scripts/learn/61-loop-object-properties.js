// --------------------------------------------------------------------------
// 📌 객체 속성 순환
// --------------------------------------------------------------------------

// for...in 문
;(() => {
  
  const cssMap = {
    'display': 'grid',
    'font-size': '48px',
    'margin-block-end': '40px',
    'gap': '12px',
  }

  for(const key in cssMap) {
    const value = cssMap[key]
    console.log({ key, value })
  }

})

// for...of 문
// Object.entries()
;(() => {
  
  const cssMap = {
    'display': 'grid',
    'font-size': '48px',
    'margin-block-end': '40px',
    'gap': '12px',
  }

  // console.log(Array.from(cssMap)) ❌
  // console.log(Object.entries(cssMap)) ✅

  const objectEntriesResult = [
    ['display', 'grid'],
    ['font-size', '48px'],
    ['margin-block-end', '40px'],
    ['gap', '12px'],
  ]
  // console.log(objectEntriesResult)
  
  // 객체 -> 배열 변경
  // 구조 분해 할당

  // for(const keyValue/* [key, value] */ of Object.entries(cssMap) /* [[key, value], [key, value]] */) {
  //   console.log(keyValue[0]) // key
  //   console.log(keyValue[1]) // value
  // }

  for (const [key, value] of Object.entries(cssMap)) {
    console.log(key)
    console.log(value)
  }

})

// Object.keys()
// Object.values()
;(() => {

  // 객체
  const cssMap = {
    'display': 'grid',
    'font-size': '48px',
    'margin-block-end': '40px',
    'gap': '12px',
  }

  // 객체 -> 배열
  // console.log(Object.keys(cssMap))
  // console.log(Object.values(cssMap))
  // console.log(Object.entries(cssMap))

  // 객체 순환 속성 및 값을 확인
  // 객체 -> 배열 -> for...of 문

  for (const [key, value] of Object.entries(cssMap)) {
    // console.log({ key, value })
  }

  for (const key of Object.keys(cssMap)) {
    // console.log(key)
  }
  
  for (const value of Object.values(cssMap)) {
    // console.log(value)
  }

  // Object.entries(cssMap).forEach((keyValue/* [key, value] */) => {
  Object.entries(cssMap).forEach(([key, value]) => {
    // console.log(key, value)
  })
  
  Object.keys(cssMap).forEach((key) => {
    console.log(key)
  })

  Object.values(cssMap).forEach((value) => {
    console.log(value)
  })

})

// 실습 1. 언어 이름 출력
// 다음 객체가 주어졌을 때 각 프로그래밍 언어의 한글 이름을 모두 콘솔 패널에 출력합니다.
;(() => {
  
  const 프로그래밍_언어 = {
    자바스크립트: 'JavaScript',
    파이썬: 'Python',
    루비: 'Ruby',
    고: 'Golang',
  }

  // for...of
  for (const 언어 of Object.keys(프로그래밍_언어)) console.log(언어)

  // forEach()
  Object.keys(프로그래밍_언어).forEach((언어) => console.log(언어))

})

// 실습 2. 점수의 총 합계 출력
// 다음 객체가 주어졌을 때, 점수의 총 합계를 콘솔 패널에 출력합니다.
;(() => {
  const 점수 = {
    수학: 90,
    과학: 85,
    영어: 92,
    국어: 100,
  }

  // for...of
  {
    let totalScore = 0
    for (const score of Object.values(점수)) totalScore += score
    console.log(totalScore)
  }

  // forEach()
  {
    let totalScore = 0
    Object.values(점수).forEach((score) => totalScore += score)
    console.log(totalScore)
  }

  // reduce()
  {
    const totalScore = Object.values(점수).reduce((totalScore, score) => totalScore + score, 0)
    console.log(totalScore)
  }

})

// 실습 3. 객체의 키, 값 표로 출력
// 다음 객체의 키, 값을 표(table)로 템플릿 스트링으로 출력합니다.
;(() => {

  const 프로필 = {
    이름: '하영',
    성별: '여성',
    나이: 26,
    거주지: '서울',
    직업: '공무원',
  }

  console.log(Object.entries(프로필))

  // for...of → 문이므로 값을 반환 ❌
  // forEach() → 식이지만 undefined 반환 ❌
  // map() + join() → 식으로 값을 반환 ✅
  // reduce() → 식으로 값을 반환 ✅

  // map() + join() 코드 예시
  // const tableTemplate = `
  //   <table id="practice">
  //     <caption>프로필 정보</caption>
  //     <tbody>
  //       ${Object
  //         .entries(프로필)
  //         .map(([key, value]) => `
  //           <tr>
  //             <th scope="row">${key}</th>
  //             <td>${value}</td>
  //           </tr>
  //         `)
  //         .join('')
  //       }
  //     </tbody>
  //   </table>
  // `

  // reduce() 코드 예시
  const tableTemplate = `
    <table id="practice">
      <caption>프로필 정보</caption>
      <tbody>
        ${createTableRowsTemplate()}
      </tbody>
    </table>
  `

  function createTableRowsTemplate() {
    return Object
          .entries(프로필)
          .reduce((templateString, [key, value]) => {
            const tableRowTemplate = `
              <tr>
                <th scope="row">${key}</th>
                <td>${value}</td>
              </tr>
            `
            return `${templateString}${tableRowTemplate}`
          }, '')
  }

  console.log(tableTemplate)
})()
// --------------------------------------------------------------------------
// 📌 템플릿 리터럴 (Template Literals)
// --------------------------------------------------------------------------
//    - 역따옴표 (Backtick, `)
//    - 인터폴레이션 (Interpolation, 보간, `${}` )
// --------------------------------------------------------------------------

/* String Concatination */
;(() => {
  
  function greetTemplate(data) {
    const name = data.name // '성호'
    const mealTime = data.mealTime // '점심'

    return `안녕! ${name}, 맛있는 ${mealTime} 먹자.`
    // return '안녕! ' + name + ', 맛있는 ' + mealTime + ' 먹자.'
  }

  const greet = greetTemplate({ name: '성호', mealTime: '점심' })
  console.log(greet) // <p>안녕! 성호, 맛있는 점심 먹자.</p>

})

/* Template Literal */
;(() => {

  // 문법 오류
  // const htmlString = '<div class="practice2" style="display: flex; flex-direction: column; gap: 20px;">
  //     <input type="number" aria-label="점수" placeholder="점수를 입력하세요" />
  //     <button type="button">등급 확인</button>
  //     <output>등급 출력</output>
  //   </div>'

  let containerClassName = 'container'
  let inputType = 'number'
  let outputValue = '아웃풋 벨류'
  let buttonLabel = '버튼 레이블'
  let styleRules = 'display: flex; flex-direction: column; gap: 20px;'
  let placeholderText = '점수를 입력하세요'

  // 방법 1. 문자열 연결을 사용해 템플릿 문자열 구성
  let htmlString = '<div class="'+ containerClassName +'" style="'+ styleRules +'">'
  htmlString += '<input type="'+ inputType +'" aria-label="점수" placeholder="'+ placeholderText +'" />'
  htmlString += '<button type="button">'+ buttonLabel +'</button>'
  htmlString += '<output>'+ outputValue +'</output>'
  htmlString += '</div>'

  // 방법 2. 배열을 사용해 템플릿 문자열 구성
  htmlString = [
    '<div class="'+ containerClassName +'" style="'+ styleRules +'">',
      '<input type="'+ inputType +'" aria-label="점수" placeholder="'+ placeholderText +'" />',
      '<button type="button">'+ buttonLabel +'</button>',
      '<output>'+ outputValue +'</output>',
    '</div>',
  ].join('')

  // 방법 3. 이스케이프 처리를 사용해 템플릿 문자열 구성
  htmlString = '\
    <div class="'+ containerClassName +'" style="'+ styleRules +'">\
      <input type="'+ inputType +'" aria-label="점수" placeholder="'+ placeholderText +'" />\
      <button type="button">'+ buttonLabel +'</button>\
      <output>'+ outputValue +'</output>\
    </div>\
  '

  // 방법 4. 템플릿 리터럴을 사용해 템플릿 문자열 구성
  htmlString = /* html */`
    <div class="${containerClassName}" style="${styleRules}">
      <input type="${inputType}" aria-label="점수" placeholder="${placeholderText}" />
      <button type="button">${buttonLabel}</button>
      <output>${outputValue}</output>
    </div>
  `

  console.log(htmlString)

})

/* Tagged Template */
// 템플릿 리터럴의 좀 더 고급 형태로 "태그드 템플릿(Tagged Template)"
;(() => {
  
  function sayJavaScript(x, y, z) {
    console.log(x, y, z)
    // x = [string, string, string]
    // y = '한국의 역사'
    // z = 'KOREAN'

    // console.log('헤이~ 자바스크립트! 👏')
  }

  // 함수 실행은 ()를 함수 이름 뒤에 붙인다.
  // sayJavaScript()

  let book = '한국의 역사'
  let language = 'KOREAN'

  // 역 따옴표를 함수 이름 뒤에 붙이면?
  // 함수를 실행한다.
  sayJavaScript`
    어떤 도서가 읽기 좋을까요?
    → ${book}(${language})
    그렇군요!!! 👏
  `

})

/* Tagged Template 과연 유용할까? */
;(() => {
  
  function styled(cssStrings, target) {
    // document.ELEMENT_NODE === 1
    if (target.nodeType !== 1) return
    target.style.cssText = cssStrings.join('')
  }

  const headline = document.querySelector('h1')

  // 일반 함수 형태로 함수 호출 
  // styled(
  //   /* css */`
  //     color: #e54d26;
  //     background-color: #000;
  //     padding: 6px 20px;
  //     border-radius: 4px;
  //     font-size: 100px;
  //   `, 
  //   headline
  // )

  // 태그 함수 형태로 함수 호출
  styled`
    ${headline}
    color: #e54d26;
    background-color: #000;
    padding: 6px 20px;
    border-radius: 4px;
    font-size: 40px;
  `

})

// 실습
;(() => {
  
  const practice = document.querySelector('.practice')
  const button = practice.querySelector('[type="button"]')
  const form = practice.querySelector('form')
  const para = practice.querySelector('p')

  button.addEventListener('click', () => {
    const username = form.elements.username.value.trim()
    const mealValue = form.elements.meal.value
    const meal = mealValue === 'breakfast' 
                  ? '아침' 
                  : mealValue === 'lunch' 
                    ? '점심' 
                    : '저녁'

    para.textContent = `안녕! ${username}. ${meal} 먹었어?`
  })

})()
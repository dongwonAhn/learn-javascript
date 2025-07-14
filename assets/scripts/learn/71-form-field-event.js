// --------------------------------------------------------------------------
// 📌 폼 필드 이벤트
// --------------------------------------------------------------------------

// 폼 컨트롤 이벤트
// - change
// - input
// - focus (버블링 ❌)
// - focusin
// - blur (버블링 ❌)
// - focusout
;(() => {
  const form = document.querySelector('form')
  const emailInput = document.getElementById('email')

  // 폼 요소에 연결된 focus 이벤트는 이벤트 버블링되지 않음
  form.addEventListener('focus', ({ target }) => {
    console.log('[form] focus', `<${target.localName}>`)
  })
    
  // 폼 요소에 연결된 focusin 이벤트는 이벤트 버블링됨
  form.addEventListener('focusin', ({ target }) => {
    console.log('[form] focusin', `<${target.localName}>`)
  })

  form.addEventListener('focusout', ({ target }) => {
    console.log('[form] focusout', `<${target.localName}>`)
  })
  
  // 인풋 요소에 연결된 change, input, focus 이벤트 감지
  emailInput.addEventListener('change', () => console.log('[input] change event'))
  emailInput.addEventListener('input', () => console.log('[input] input event'))
  emailInput.addEventListener('focus', () => console.log('[input] focus event'))
  emailInput.addEventListener('blur', () => console.log('[input] blur event'))
})

// 체크박스 (checkbox)
// .value
// .checked
;(() => {
  const form = document.querySelector('.form')

  const [, , lemonCheckbox] = form.querySelectorAll('[type="checkbox"]')

  lemonCheckbox.addEventListener('input', (e) => {
    console.log(e.currentTarget.checked)
  })

  form.addEventListener('change', ({ target }) => {
    console.log(target.checked, target.value)
  })

  const checkboxes = Array.from(form.elements).filter((element) => {
    return element.type === 'checkbox' && element.checked
  })
  console.log(checkboxes)

  const checkedInputs = [...form.querySelectorAll(':checked')]
  console.log(checkedInputs)

  for (const element of form.elements) {
    console.log(element.value)
    console.log(element.checked)
    if (element.value === 'on') element.checked = true
  }
})

// 라디오 (radio)
// name 속성 값 동일
// .value
// .checked
;(() => {
  
  const form = document.querySelector('.form')

  const radios = [...form.querySelectorAll('[type="radio"]')]

  console.log(radios.filter(radio => radio.checked))

  // const [ appleRadio, grapeRadio ] = form.elements

  // console.log(appleRadio.value)
  // console.log(appleRadio.checked)
  // console.log(grapeRadio.value)
  // console.log(grapeRadio.checked)

})

// 텍스트 에이리어 (textarea)
;(() => {
  
  const form = document.querySelector('.form')

  // <textarea> 요소의 값 쓰기
  form.comment.value = '제품이 가벼워 휴대하기 좋네요. 추천합니다! 😃'
  
  // <textarea> 요소의 값 읽기
  console.log(form.comment.value.trim())

})()
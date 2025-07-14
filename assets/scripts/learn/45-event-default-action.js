// href 속성을 가진 요소의 브라우저 기본 작동 방지
;(() => {
  // 브라우저의 기본 작동 확인
  // href 속성을 가진 요소 클릭 시, 연결
  // checkbox 요소를 클릭 시, 체크 상태 변경
  // form 내부의 submit 버튼 이벤트 발동

  const aLink = document.querySelector('a[href="https://naver.com"]')
  
  aLink.addEventListener('click', (e) => {
    console.log('e.currentTarget =', e.currentTarget)
  })

  aLink.addEventListener('click', (e) => {
    // 브라우저 기본 작동 방지
    if (!e.defaultPrevented) e.preventDefault()  
  })
  

})

// 체크박스 요소의 브라우저 기본 작동 방지
// change 이벤트
;(() => {
  const checkbox = document.getElementById('agreement')
  console.log(checkbox.checked)

  checkbox.addEventListener('change', (e) => {
    // console.dir(e)

    // 브라우저 기본 작동 방지 
    // (input:checkbox 요소에는 브라우저 기본 작동 방지가 안됨)
    // e.preventDefault()

    // if (e.defaultPrevented) {
    //   console.log('브라우저 기본 작동 방지 상태')
    // }

    // 브라우저 기본 작동이 방지될까?
    const input = e.currentTarget
    const isChecked = input.checked // false -> true 변경
    console.log('변경된 상태 =', isChecked)
    
    // 변경된 값을 다시 반전해서 할당
    setTimeout(() => {
      console.log('timeout: 0.3s')
      input.checked = !isChecked // true -> false 다시 변경
      // console.warn('체크박스는 브라우저 기본 작동 방지 상태입니다.')
      console.log('변경된 상태 반전(화면에 표시된 상태 값) =', input.checked)
    }, 300)
  })

})

// 체크박스 요소의 브라우저 기본 작동 방지
// click 이벤트
;(() => {
  const checkbox = document.getElementById('agreement')
  checkbox.addEventListener('click', (e) => {
    console.dir(e)

    if (!e.defaultPrevented) {
      console.log('1')
      e.preventDefault()
    } else {
      console.log('2')
    }
  })
})()

// 폼 요소의 브라우저 기본 작동 방지
// - submit 이벤트
// - reset 이벤트
;(() => {
  const form = document.querySelector('[data-learn="form"]')
  
  form.addEventListener('submit', (e) => {
    // 서버에 입력 값을 전송하는 브라우저 기본 작동을 방지
    if (!e.defaultPrevented) e.preventDefault()

    // JavaScript를 사용해 사용자 입력한 값 검토 처리
    const formElement = e.currentTarget
    console.log(formElement) // <form>
    console.log(formElement.elements)
    console.log(formElement.elements['search-term'])
    console.log(formElement.elements['search-term'].value)
  })

  form.addEventListener('reset', (e) => {
    if (!e.defaultPrevented) e.preventDefault()
    
    // 매뉴얼 리셋(Manual Reset)
    e.currentTarget.elements['search-term'].value = ''
  })

})()
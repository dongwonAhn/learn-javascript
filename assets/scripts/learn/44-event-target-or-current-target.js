/* eslint-disable no-unused-vars, no-undef */

// cssText 속성
;(() => {
  
  const button = document.querySelector('[data-name="change-bg-color"]')
  
  button.addEventListener('click', () => {
    button.style.cssText = '\
      background-color: #e54d26;\
      padding: 8px 16px;\
      border: 0;\
      border-radius: 4px;\
    '
    
    // button.style.setProperty('background-color', '#e54d26')
    // button.style.setProperty('padding', '8px 16px')
    // button.style.setProperty('border', '0')
    // button.style.setProperty('border-radius', '4px')
  })

})

// 버튼을 참조한 변수 이름 변경 상황에서 
// 발생할 수 있는 문제
;(() => {
  
  const changeBgColorToButton = document.querySelector('[data-name="change-bg-color"]')
  
  changeBgColorToButton.addEventListener('click', handleChangeButtonStyles)

  function handleChangeButtonStyles() {
    button.style.cssText = '\
      background-color: #7f1cef;\
      padding: 8px 16px;\
      border: 0;\
      border-radius: 4px;\
      color: #fff\
    '
  }

})

// 이벤트 리스너(핸들러) 콜백(함수)에서
// 이벤트를 발생시킨 대상 찾기 (this)
;(() => {
  
  const btn = document.querySelector('[data-name="change-bg-color"]')
  
  // 화살표 함수 표현식을 이벤트 핸들러로 정의한 내부에서 this를 사용하면 무슨 일이 발생할까?
  const handleArrowFunctionExpression = () => {
    console.log('화살표 함수 표현식 내부:', this)
  }

  // btn.addEventListener('click', handleArrowFunctionExpression)

  // btn.addEventListener('click', handleChangeButtonStyles)

  btn.addEventListener('click', () => {
    console.log('btn =', btn) // <button>
    console.log('this =', this) // window
  })
  
  btn.addEventListener('click', function() {
    console.log('btn =', btn) // <button>
    console.log('this =', this) // <button>
  })

  function handleChangeButtonStyles() {
    console.log('일반 함수 선언 내부:', this)
    // 1. this
    this.style.cssText = '\
      background-color: #7f1cef;\
      padding: 8px 16px;\
      border: 0;\
      border-radius: 4px;\
      color: #fff\
    '
  }

})

// 이벤트 리스너(핸들러) 콜백(함수)에서
// 이벤트를 발생시킨 대상 찾기 (event.currentTarget)
;(() => {
  
  const button = document.querySelector('[data-name="change-bg-color"]')
  
  // 이벤트 리스너(핸들러) 콜백(함수)는 반드시 이벤트 객체를 전달
  // 이벤트 객체를 사용해 청취 중인 대상을 사용하면 this에서 확인했던
  // 화살표 함수 표현식에서 참조 대상이 변경되는 문제는 발생하지 않음
  const changeButtonStyles = (event) => {

    console.log(event) // 이벤트 객체
    console.log(event.currentTarget) // 이벤트가 연결된 대상

    // 2. event 객체의 currentTarget 속성
    event.currentTarget.style.cssText = '\
      background-color: #7f1cef;\
      padding: 8px 16px;\
      border: 0;\
      border-radius: 4px;\
      color: #fff\
    '
  }
  
  button.addEventListener('click', changeButtonStyles)

})()

// 이벤트 리스너를 분리하든, 인라인으로 바로 연결해 사용하든
// 변수 또는 this 대신에 리스너 함수에 인수로 전달되는 이벤트 객체를 활용
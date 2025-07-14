/* global attr, setAttr, getAttr */

;(() => {
  // attr 유틸리티 함수 작성 및 활용
  // attr(element, attributeName, ?attributeValue)
  // 속성 쓰기
  // const changedElement = attr(element, attributeName, attributeValue)
  // 속성 읽기
  // const attributeValue = attr(element, attributeName)

  const h1 = document.querySelector('h1')
  
  // 속성 추가(쓰기)
  // - id="heading"
  // h1.id = 'headline' // 옛날 방식
  // h1.setAttribute('id', 'heading')
  attr(h1, 'id', 'heading')

  // - class="headline headline__level--1"
  // h1.className = 'headline headline__level--1' // 옛날 방식
  // h1.setAttribute('class', 'headline')
  // h1.classList.add('headline__level--1')
  attr(h1, 'class', 'headline headline__level--1')
  
  // - title="자바스크립트"
  // h1.title = '자바스크립트' // 옛날 방식
  // h1.setAttribute('title', '자바스크립트')
  attr(h1, 'title', '자바스크립트')

  // - data-role="headline"
  // h1.setAttribute('data-role', 'headline')
  attr(h1, 'data-role', 'headline')

  // - data-level="1"
  // h1.setAttribute('data-level', '1')
  attr(h1, 'data-level', '1')

  // h1 요소에 mouseenter 이벤트 리스너 추가
  h1.addEventListener('mouseenter', () => {  
    // 속성 읽기
    // - id
    // console.log(h1.id) // 옛날 방식
    // console.log(h1.getAttribute('id'))
    console.log(attr(h1, 'id'))
    
    // - class
    // console.log(h1.className) // 옛날 방식
    // console.log(h1.getAttribute('class'))
    // console.log(h1.classList.value)
    console.log(attr(h1, 'class'))

    // - title
    // console.log(h1.title) // 옛날 방식
    // console.log(h1.getAttribute('title'))
    console.log(attr(h1, 'title'))

    // - data-role
    // console.log(h1.getAttribute('data-role'))
    console.log(attr(h1, 'data-role'))
    
    // - data-level
    // console.log(h1.getAttribute('data-level'))
    console.log(attr(h1, 'data-level'))
  })

})

;(() => {
  const h1 = document.querySelector('h1')

  // 속성 쓰기 (attr 함수 속성 값 전달)
  setAttr(h1, 'id', 'dynamic')
  // setAttr(
  //   setAttr(h1, 'id', 'dynamic'), 
  //   'title', 
  //   '다이내믹 코리아'
  // )

  // 속성 읽기 (attr 함수 속성 값 반환)
  const h1IdValue = getAttr(h1, 'id')
  console.log(h1IdValue)

  // 방법1(요소): undefined
  // 방법2(요소): undefined
  // 함수 체이닝
  // 방법2(방법1(요소))
})()
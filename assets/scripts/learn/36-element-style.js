;(() => {
  
  const headline = document.querySelector('h1')

  // 요소의 style 속성을 사용해 CSS 스타일링
  // 동적으로 DOM 요소 스타일 변경(update)

  // Web APIs
  // CSSStyleDeclaration {} 읽기
  //console.log(headline.style)
  
  // CSSStyleDeclaration {} 쓰기
  // CSS 속성 값 단위 포함 '200px'
  // headline.style['font-size'] = 100 + 'px'
  // headline.style.fontSize = 100 + 'px'

  // 이벤트 리스너 추가 ------------------------------------

  // 마우스 엔터 (mouseenter)
  headline.addEventListener('mouseenter', () => {
    // CSSStyleDeclaration { setProperty }
    headline.style.setProperty('font-size', '200px')
    headline.style.setProperty('font-weight', '900')
  })
  
  // 마우스 리브 (mouseleave)
  headline.addEventListener('mouseleave', () => {
    headline.style.setProperty('font-size', '42.4px')
    headline.style.setProperty('font-weight', '300')
    // headline.style.fontSize = '42.4px'
    // headline.style.fontWeight = 300
  })
  
})

;(() => {
  
  const headline = document.querySelector('h1')
  console.log(headline)

  // 방법 1. ❌ JavaScript 문법 오류
  // headline.style.--font-size = '400px'
  
  // 방법 2. ❌ 일반적으로 사용되는 (예전) 방법
  headline.style['--font-size'] = '400px'

  // 방법 3. CSSStyleDeclaration { setProperty }
  headline.style.setProperty('--font-size', '400px')

})()
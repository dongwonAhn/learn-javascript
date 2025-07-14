{
  const OPEN_CLASSNAME = 'is-open'
  const accordionContainer = document.querySelector('.accordion__container')
  const accordionContentLinks = accordionContainer.querySelectorAll('.accordion__content a')

  accordionContentLinks.forEach((link) => link.setAttribute('tabindex', '-1'))

  accordionContainer.addEventListener('click', (e) => {
    const button = e.target.closest('button')
    
    if (button) {
      const accordion = button.closest('.accordion')
      // 아코디언 이너의 계산된 높이 값 브라우저로부터 가져오기
      const accordionContent = accordion.querySelector('.accordion__content')
      const accordionLink = accordionContent.querySelector('a')
      const accordionInner = accordionContent.firstElementChild
      const height = accordionInner.getBoundingClientRect().height
      

      // 열린 / 닫힌 상태에 따른 조건 분기
      // 아코디언이 열리지 않은 상태라면
      if (!accordion.classList.contains(OPEN_CLASSNAME)) {
        // 열린 상태가 되기 위해 블록 사이즈(높이) 계산된 높이 값으로 설정
        accordionContent.style.setProperty('block-size', height + 'px')
        // accordionLink.removeAttribute('tabindex')
        accordionLink.setAttribute('tabindex', '0')
      } 
      // 아코디언이 열린 상태라면
      else {
        // 닫힌 상태가 되기 위해 블록 사이즈(높이) 0으로 설정
        accordionContent.style.setProperty('block-size', 0)
        accordionLink.setAttribute('tabindex', '-1')
      }

      accordion.classList.toggle(OPEN_CLASSNAME)
    }
  })
}
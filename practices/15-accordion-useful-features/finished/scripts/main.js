{
  const accordionContainer = document.querySelector('.accordion__container')
  const links = accordionContainer.querySelectorAll('.accordion a')
  const OPENED_CLASSNAME = 'is-open'

  for (const link of links) {
    link.setAttribute('tabindex', '-1')
  }
  
  // 구조 분해 할당
  accordionContainer.addEventListener('click', ({ target }) => {
    const button = target.closest('button')
    
    // 빠른 반환
    if (!button) return

    const accordion = button.closest('.accordion')
    const accordionInner = accordion.querySelector('.accordion__inner')
    const heightValue = accordionInner.getBoundingClientRect().height

    const accordionContent = accordionInner.parentElement
    const link = accordionInner.querySelector('a')
    
    // 삼항 연산자 식
    // 템플릿 리터럴
    const isOpened = accordion.classList.contains(OPENED_CLASSNAME)
    accordionContent.style.setProperty('height', isOpened ? 0 : `${heightValue}px`)
    isOpened ? link.setAttribute('tabindex', '-1') : link.removeAttribute('tabindex')
    
    accordion.classList.toggle(OPENED_CLASSNAME)
    
  })
}
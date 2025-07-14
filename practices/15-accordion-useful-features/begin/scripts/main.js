{
  const accordionContainer = document.querySelector('.accordion__container')
  const links = accordionContainer.querySelectorAll('.accordion a')
  const OPENED_CLASSNAME = 'is-open'

  for (const link of links) {
    link.setAttribute('tabindex', '-1')
  }
  
  accordionContainer.addEventListener('click', (e) => {
    const button = e.target.closest('.accordion')

    if (button) { 
      const accordion = button.closest('.accordion')
      const accordionInner = accordion.querySelector('.accordion__inner')
      const heightValue = accordionInner.getBoundingClientRect().height

      const accordionContent = accordionInner.parentElement
      const link = accordionInner.querySelector('a')
      
      if (!accordion.classList.contains(OPENED_CLASSNAME)) {
        accordionContent.style.setProperty('height', heightValue + 'px')
        link.removeAttribute('tabindex')
      } else {
        accordionContent.style.setProperty('height', 0)
        link.setAttribute('tabindex', '-1')
      }
      
      accordion.classList.toggle(OPENED_CLASSNAME)
    }
  })
}
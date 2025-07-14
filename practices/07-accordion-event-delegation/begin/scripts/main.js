{
  const accordions = Array.from(document.querySelectorAll('.accordion'))

  accordions.forEach((accordion) => {
    const button = accordion.querySelector('.accordion__header button')
    
    button.addEventListener('click', () => {
      accordion.classList.toggle('is-open')
    })
  })
}

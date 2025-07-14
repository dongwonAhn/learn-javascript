{
  const carousel = document.querySelector('.carousel')
  const contentWrapper = carousel.querySelector('.carousel__contents')
  const prevButton = carousel.querySelector('[aria-label*="이전"]')
  const nextButton = carousel.querySelector('[aria-label*="다음"]')
  const indicatorWrapper = carousel.querySelector('.carousel__indicators')
  const indicators = indicatorWrapper.querySelectorAll('.carousel__indicator')
  const contents = contentWrapper.querySelectorAll('.carousel__content')
  const SELECTED_CLASSNAME = 'is-selected'

  prevButton.hidden = true

  nextButton.addEventListener('click', () => {
    if (prevButton.hidden) prevButton.hidden = false

    const currentContent = carousel.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = currentContent.nextElementSibling

    if (!nextContent.nextElementSibling) nextButton.hidden = true

    const distance = getComputedStyle(nextContent).left
    contentWrapper.style.transform = 'translateX(-' + distance + ')'

    currentContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

    const currentIndicator = indicatorWrapper.querySelector(
      '.' + SELECTED_CLASSNAME,
    )
    const nextIndicator = currentIndicator.nextElementSibling
    currentIndicator.classList.remove(SELECTED_CLASSNAME)
    nextIndicator.classList.add(SELECTED_CLASSNAME)
  })

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) nextButton.hidden = false

    const currentContent = carousel.querySelector('.' + SELECTED_CLASSNAME)
    const prevContent = currentContent.previousElementSibling

    if (!prevContent.previousElementSibling) prevButton.hidden = true

    const distance = getComputedStyle(prevContent).left
    contentWrapper.style.transform = `translateX(-${distance})`

    currentContent.classList.remove(SELECTED_CLASSNAME)
    prevContent.classList.add(SELECTED_CLASSNAME)

    const currentIndicator = indicatorWrapper.querySelector(
      '.' + SELECTED_CLASSNAME,
    )
    const prevIndicator = currentIndicator.previousElementSibling
    currentIndicator.classList.remove(SELECTED_CLASSNAME)
    prevIndicator.classList.add(SELECTED_CLASSNAME)
  })

  indicatorWrapper.addEventListener('click', (e) => {
    const isIndicator = e.target.matches('.carousel__indicator')

    if (isIndicator) {
      const indicator = e.target
      let clickedIndex

      for (let i = 0, l = indicators.length; i < l; i++) {
        if (indicators.item(i) === indicator) {
          clickedIndex = i
          break
        }
      }

      const selectedContent = contents.item(clickedIndex)
      const distance = getComputedStyle(selectedContent).left
      contentWrapper.style.transform = 'translateX(-' + distance + ')'

      const currentContent = carousel.querySelector('.' + SELECTED_CLASSNAME)
      currentContent.classList.remove(SELECTED_CLASSNAME)
      selectedContent.classList.add(SELECTED_CLASSNAME)

      for (const indicator of indicators) {
        if (indicator.classList.contains(SELECTED_CLASSNAME)) {
          indicator.classList.remove(SELECTED_CLASSNAME)
          break
        }
      }

      indicator.classList.add(SELECTED_CLASSNAME)

      if (clickedIndex === 0) {
        prevButton.hidden = true
        nextButton.hidden = false
      } else if (clickedIndex === indicators.length - 1) {
        prevButton.hidden = false
        nextButton.hidden = true
      } else {
        prevButton.hidden = false
        nextButton.hidden = false
      }
    }
  })

  
}

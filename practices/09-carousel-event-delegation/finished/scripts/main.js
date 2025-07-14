{
  const carousel = document.querySelector('.carousel')

  const contentWrapper = carousel.querySelector('.carousel__contents')
  const contents = contentWrapper.querySelectorAll('.carousel__content')

  const indicatorWrapper = carousel.querySelector('.carousel__indicators')
  const indicators = indicatorWrapper.querySelectorAll('.carousel__indicator')

  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  settingUpButtonHiddenStatus()
  settingTabindexControl()

  nextButton.addEventListener('click', () => {
    if (prevButton.hidden) prevButton.hidden = false

    const selectedContent = contentWrapper.querySelector(
      '.' + SELECTED_CLASSNAME,
    )
    const nextContent = selectedContent.nextElementSibling

    if (!nextContent.nextElementSibling) nextButton.hidden = true

    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    contentWrapper.style.setProperty(
      'transform',
      'translateX(-' + distance + ')',
    )

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

    const selectedIndicator = indicatorWrapper.querySelector(
      '.' + SELECTED_CLASSNAME,
    )
    const nextIndicator = selectedIndicator.nextElementSibling

    selectedIndicator.classList.remove(SELECTED_CLASSNAME)
    nextIndicator.classList.add(SELECTED_CLASSNAME)

    settingTabindexControl()
  })

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) nextButton.hidden = false

    const selectedContent = contentWrapper.querySelector(
      '.' + SELECTED_CLASSNAME,
    )
    const prevContent = selectedContent.previousElementSibling

    if (!prevContent.previousElementSibling) prevButton.hidden = true

    const distance = getComputedStyle(prevContent).getPropertyValue('left')
    contentWrapper.style.setProperty(
      'transform',
      'translateX(-' + distance + ')',
    )

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    prevContent.classList.add(SELECTED_CLASSNAME)

    const selectedIndicator = indicatorWrapper.querySelector(
      '.' + SELECTED_CLASSNAME,
    )
    const prevIndicator = selectedIndicator.previousElementSibling

    selectedIndicator.classList.remove(SELECTED_CLASSNAME)

    prevIndicator.classList.add(SELECTED_CLASSNAME)

    settingTabindexControl()
  })

  // 이벤트 위임
  indicatorWrapper.addEventListener('click', (e) => {
    const target = e.target

    // 1. Element.closest(selector)
    //    엘리먼트(요소)를 포함한 조상에서 전달된 선택자와 일치하는 가장 가까운 요소 찾아서 반환
    // console.log('cloest', target.closest('.carousel_indicator'))
    // const indicatorButton = target.closest('.carousel_indicator')
    // if (indicatorButton) {
    //   console.log(indicatorButton)
    // }

    // 2. Element.matches(selector)
    //    엘리먼트(요소)가 전달된 선택자와 일치(매칭)하는 지 확인해 불리언 값을 반환
    if('matches', target.matches('.carousel_indicator')) {
      console.log(target)
      target.addEventListener('click', () => {
        
      })
    }
  })

  for (const indicator of indicators) {
    indicator.addEventListener('click', () => {
      let selectedIndex

      for (let i = 0, l = indicators.length; i < l; i += 1) {
        if (indicators.item(i) === indicator) {
          selectedIndex = i
          break
        }
      }

      if (selectedIndex === 0) {
        prevButton.hidden = true
        nextButton.hidden = false
      } else if (selectedIndex === indicators.length - 1) {
        prevButton.hidden = false
        nextButton.hidden = true
      } else {
        prevButton.hidden = false
        nextButton.hidden = false
      }

      const activeContent = contents.item(selectedIndex)
      const distance = getComputedStyle(activeContent).getPropertyValue('left')
      contentWrapper.style.setProperty(
        'transform',
        'translateX(-' + distance + ')',
      )

      const selectedContent = contentWrapper.querySelector(
        '.' + SELECTED_CLASSNAME,
      )
      selectedContent.classList.remove(SELECTED_CLASSNAME)
      activeContent.classList.add(SELECTED_CLASSNAME)

      const selectedIndicator = indicatorWrapper.querySelector(
        '.' + SELECTED_CLASSNAME,
      )
      selectedIndicator.classList.remove(SELECTED_CLASSNAME)
      indicator.classList.add(SELECTED_CLASSNAME)

      settingTabindexControl()
    })
  }

  function settingUpButtonHiddenStatus() {
    let selectedIndex = -1

    for (let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i
        break
      }
    }

    if (selectedIndex === -1) {
      console.warn(
        '어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.',
      )
    } else if (selectedIndex === 0) {
      prevButton.hidden = true
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true
    }
  }

  function settingTabindexControl() {
    for (const content of contents) {
      if (content.classList.contains(SELECTED_CLASSNAME)) {
        content.querySelector('a').removeAttribute('tabindex')
      } else {
        content.querySelector('a').setAttribute('tabindex', '-1')
      }
    }
  }
}

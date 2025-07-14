// 9. 키보드 접근 논리적 초점 이동 | 접근성 개선
;(() => {
  const carousel = document.querySelector('.carousel')
  
  const contentWrapper = carousel.querySelector('.carousel__contents')
  const contents = contentWrapper.querySelectorAll('.carousel__content')

  const indicatorWrapper = carousel.querySelector('.carousel__indicators')
  const indicators = indicatorWrapper.querySelectorAll('.carousel__indicator')

  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  settingUpButtonHiddenStatus()
  
  // 로딩 시, 활성 상태(화면에 표시되는)의 
  // 콘텐츠 내부의 링크 외 다른 링크에는 tabindex="-1" 설정
  settingTabindexControl()
    
  nextButton.addEventListener('click', () => {
    if(prevButton.hidden) prevButton.hidden = false

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling

    if(!nextContent.nextElementSibling) nextButton.hidden = true

    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

    const selectedIndicator = indicatorWrapper.querySelector('.'+SELECTED_CLASSNAME)
    const nextIndicator = selectedIndicator.nextElementSibling
    
    selectedIndicator.classList.remove(SELECTED_CLASSNAME)
    nextIndicator.classList.add(SELECTED_CLASSNAME)

    settingTabindexControl()
  })

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) nextButton.hidden = false

    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    const prevContent = selectedContent.previousElementSibling

    if (!prevContent.previousElementSibling) prevButton.hidden = true

    const distance = getComputedStyle(prevContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    prevContent.classList.add(SELECTED_CLASSNAME)

    const selectedIndicator = indicatorWrapper.querySelector('.'+SELECTED_CLASSNAME)
    const prevIndicator = selectedIndicator.previousElementSibling
    
    selectedIndicator.classList.remove(SELECTED_CLASSNAME)

    prevIndicator.classList.add(SELECTED_CLASSNAME)

    settingTabindexControl()
  })

  for (const indicator of indicators) {
    indicator.addEventListener('click', () => {
      let selectedIndex

      for(let i = 0, l = indicators.length; i < l; i += 1) {
        if(indicators.item(i) === indicator) {
          selectedIndex = i 
          break
        }
      }

      // selectedIndex 값이 처음(0)일 때 
      // -> prevButton 숨긴다, nextButton 보인다
      if (selectedIndex === 0) {
        prevButton.hidden = true
        nextButton.hidden = false
      }

      // selectedIndex 값이 마지막 인덱스(indicators.length -1)일 때 
      // -> prevButton 보인다, nextButton 숨긴다
      else if (selectedIndex === indicators.length -1) {
        prevButton.hidden = false
        nextButton.hidden = true
      }

      // 둘 다 아닐 때
      // -> prevButton, nextButton 둘 다 보인다
      else {
        prevButton.hidden = false
        nextButton.hidden = false
      }


      const activeContent = contents.item(selectedIndex) 
      const distance = getComputedStyle(activeContent).getPropertyValue('left')
      contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

      const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
      selectedContent.classList.remove(SELECTED_CLASSNAME)
      activeContent.classList.add(SELECTED_CLASSNAME)

      const selectedIndicator = indicatorWrapper.querySelector('.'+SELECTED_CLASSNAME)
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
      console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.')
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

})()

// 쌤이 한 코드
;(() => {
  
  const carousel = document.querySelector('.carousel')
  
  const contentWrapper = carousel.querySelector('.carousel__contents')
  const contents = contentWrapper.querySelectorAll('.carousel__content')

  const indicatorWrapper = carousel.querySelector('.carousel__indicators')
  const indicators = indicatorWrapper.querySelectorAll('.carousel__indicator')

  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')
  
  const SELECTED_CLASSNAME = 'is-selected'

  setSelectedIndex()
  setLinkAccessControl()

  nextButton.addEventListener('click', handleNext)
  prevButton.addEventListener('click', handlePrev)
  
  for (const indicator of indicators) {
    indicator.addEventListener('click', () => {
      handleIndicator(indicator)
    })
  }

  function setSelectedIndex() {
    let selectedIndex = -1

    for(let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i
        break
      }
    }

    if (selectedIndex === -1) {
      contents.item(0).classList.add(SELECTED_CLASSNAME)
      indicators.item(0).classList.add(SELECTED_CLASSNAME)
      prevButton.hidden = true
    } else if (selectedIndex === 0) {
      prevButton.hidden = true
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true
    }

  }

  function setLinkAccessControl() {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    
    for (const content of contents) {
      if (content === selectedContent) {
        selectedContent.querySelector('a').setAttribute('tabindex', '0')
      } else {
        content.querySelector('a').setAttribute('tabindex', '-1')
      }
    }
  }

  function handleNext() {    
    setHiddenToReveal(prevButton)
    navigateContent('next')
    navigateIndicator('next')
    setLinkAccessControl()
  }

  function handlePrev() {
    setHiddenToReveal(nextButton)
    navigateContent('prev')
    navigateIndicator('prev')
    setLinkAccessControl()
  }

  function handleIndicator(indicator) {
    const selectedIndicator = indicatorWrapper.querySelector('.' + SELECTED_CLASSNAME)

    selectedIndicator.classList.remove(SELECTED_CLASSNAME)
    indicator.classList.add(SELECTED_CLASSNAME)

    let selectedIndex

    for (let i = 0, l = indicators.length; i < l; i++) {
      if(indicators.item(i) === indicator) {
        selectedIndex = i
        break
      }
    }

    const activeContent = contents.item(selectedIndex)
    const distance = getComputedStyle(activeContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    
    selectedContent.classList.remove(SELECTED_CLASSNAME)
    activeContent.classList.add(SELECTED_CLASSNAME)

    if(selectedIndex === 0) {
      prevButton.hidden = true
      nextButton.hidden = false
    } else if (selectedIndex === indicators.length - 1) {
      prevButton.hidden = false
      nextButton.hidden = true
    } else {
      prevButton.hidden = false
      nextButton.hidden = false
    }

    setLinkAccessControl()
    
  }

  function setHiddenToReveal(button) {
    if (button.hidden) button.hidden = false
  }

  function navigateContent(type) {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    let activeContent

    if (type === 'next') {
      activeContent = selectedContent.nextElementSibling
      if (!activeContent.nextElementSibling) nextButton.hidden = true
    } else {
      activeContent = selectedContent.previousElementSibling
      if (!activeContent.previousElementSibling) prevButton.hidden = true
    }

    const distance = getComputedStyle(activeContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    activeContent.classList.add(SELECTED_CLASSNAME)
  }

  function navigateIndicator(type) {
    const selectedIndicator = indicatorWrapper.querySelector('.' + SELECTED_CLASSNAME)

    let activeIndicator

    if (type === 'next') {
      activeIndicator = selectedIndicator.nextElementSibling
    } else {
      activeIndicator = selectedIndicator.previousElementSibling
    }

    selectedIndicator.classList.remove(SELECTED_CLASSNAME)
    activeIndicator.classList.add(SELECTED_CLASSNAME)
  }

})

// - 로딩되면 이전 버튼은 처음에 감춰져야 합니다.
// - 다음 탐색 버튼을 누르면 콘텐츠가 전환되어 이전 콘텐츠가 표시됩니다.
// - 표시된 콘텐츠가 처음이 아닌 경우, 이전 버튼이 표시되어야 합니다.
// - 마지막 콘텐츠가 표시되면 다음 버튼은 감춰져야 합니다.
// - 이전 탐색 버튼을 누르면 콘텐츠가 전환되어 이전 콘텐츠가 표시됩니다.
// - 표시된 콘텐츠가 마지막이 아닌 경우, 다음 버튼이 표시되어야 합니다.
// - 처음 콘텐츠가 표시되면 이전 버튼은 감춰져야 합니다.
// - 인디케이터를 클릭하면 해당 순서의 콘텐츠가 표시되어야 합니다.
// - 표시된 콘텐츠에 따라 이전/다음 버튼이 감춰지거나 표시되어야 합니다.
// - 이전 활성 인디케이터와 클릭한 인디케이터는 활성 상태가 서로 전환되어야 합니다.

// chat gpt
;(() => {
// 요소 선택
const contents = document.querySelectorAll('.carousel__content');
const prevBtn = document.querySelectorAll('.carousel__button')[0];
const nextBtn = document.querySelectorAll('.carousel__button')[1];
const indicators = document.querySelectorAll('.carousel__indicator');

const contentCount = contents.length;
const contentWidth = parseInt(getComputedStyle(document.querySelector('.carousel')).getPropertyValue('--width'));
let currentIndex = 0;

// 콘텐츠 표시 함수
function showContent(index) {
  contents.forEach((content, i) => {
    content.style.left = `${(i - index) * contentWidth}px`;
  });

  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('is-selected', i === index);
  });

  // 버튼 상태 업데이트
  prevBtn.style.visibility = index === 0 ? 'hidden' : 'visible';
  nextBtn.style.visibility = index === contentCount - 1 ? 'hidden' : 'visible';
}

// 초기 상태 설정
showContent(currentIndex);

// 이전 버튼 클릭
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    showContent(currentIndex);
  }
});

// 다음 버튼 클릭
nextBtn.addEventListener('click', () => {
  if (currentIndex < contentCount - 1) {
    currentIndex++;
    showContent(currentIndex);
  }
});

// 인디케이터 클릭
indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    currentIndex = i;
    showContent(currentIndex);
  });
});
})
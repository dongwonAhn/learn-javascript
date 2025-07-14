;(() => {
  const tabContainer = document.querySelector('.tabs__container')
  const tabs = Array.from(tabContainer.querySelectorAll('.tab'))
  const tabContents = Array.from(tabContainer.querySelectorAll('.tab__content'))
  const SELECTED_CLASSNAME = 'is-selected'
  
  let selectedIndex = -1

  for (let i = 0, l = tabs.length; i<l; ++i) {
    if (tabs.at(i).classList.contains(SELECTED_CLASSNAME)) {
      selectedIndex = i
      break
    }
  }

  tabContainer.addEventListener('click', (e) => {
    const target = e.target
    const tabButton = target.closest('button')

    if(tabButton) {
      if (selectedIndex > -1) {
        tabs.at(selectedIndex).classList.remove(SELECTED_CLASSNAME)
        tabContents.at(selectedIndex).classList.remove(SELECTED_CLASSNAME)
      }

      let activeIndex

      for (let i = 0, l = tabs.length; i < l; ++i) {
        if (tabs.at(i) === tabButton) {
          activeIndex = i
          break
        }
      }

      tabs.at(activeIndex).classList.add(SELECTED_CLASSNAME)
      tabContents.at(activeIndex).classList.add(SELECTED_CLASSNAME)
      
      selectedIndex = activeIndex
    }

  })

})()
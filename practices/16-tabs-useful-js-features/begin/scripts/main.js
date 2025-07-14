{
  const tabContainer = document.querySelector('.tabs__container')
  const tabs = Array.from(tabContainer.querySelectorAll('.tab'))
  const tabContents = Array.from(tabContainer.querySelectorAll('.tab__content'))
  const SELECTED_CLASSNAME = 'is-selected'

  let selectedIndex = getSelectedIndex()

  tabContainer.addEventListener('click', (e) => {
    const button = e.target.closest('.tabs button')

    if (!button) return

    if (selectedIndex > -1) {
      tabs.at(selectedIndex).classList.remove(SELECTED_CLASSNAME)
      tabContents.at(selectedIndex).classList.remove(SELECTED_CLASSNAME)
    }

    const index = getSelectIndex(button)

    tabs.at(index).classList.add(SELECTED_CLASSNAME)
    tabContents.at(index).classList.add(SELECTED_CLASSNAME)

    selectedIndex = index
  })

  function getSelectedIndex() {
    let selectedIndex = -1

    for (let i = 0, l = tabs.length; i < l; i++) {
      if (tabs.at(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i
        break
      }
    }

    return selectedIndex
  }

  function getSelectIndex(button) {
    let index

    for (let i = 0, l = tabs.length; i < l; i += 1) {
      if (tabs.at(i) === button) {
        index = i
        break
      }
    }

    return index
  }
}

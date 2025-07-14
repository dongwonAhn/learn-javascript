{
  
  const body = document.body
  const siteContainer = document.querySelector('.site-container')
  const toggleOffsiteButton = siteContainer.querySelector('button')
  const OFFSITE_OPEN_CLASSNAME = 'offsite-is-open'

  toggleOffsiteButton.addEventListener('click', handleToggleOffsite)

  function handleToggleOffsite() {
    body.classList.toggle(OFFSITE_OPEN_CLASSNAME)
  }

}
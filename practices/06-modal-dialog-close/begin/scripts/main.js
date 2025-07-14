{
  const body = document.body
  const modal_open_button = document.querySelector('main .modal-open-button')

  const modal_overlay = document.querySelector('.modal-overlay')
  const modal_close_button = modal_overlay.querySelector('.modal-close-button')

  modal_open_button.addEventListener('click', () => {
    body.classList.add('modal-is-open')
  })

  modal_close_button.addEventListener('click', closeModalDialog)

  function closeModalDialog() {
    body.classList.remove('modal-is-open')
  }
}

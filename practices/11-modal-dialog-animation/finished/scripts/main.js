{
  const body = document.body
  const modal_open_button = document.querySelector('main .modal-open-button')
  const modal_overlay = document.querySelector('.modal-overlay')

  modal_open_button.addEventListener('click', openModalDialog)
  modal_overlay.addEventListener('click', closeModalDialog)

  function openModalDialog() {
    body.classList.add('modal-is-open')
  }

  function closeModalDialog(e) {
    const target = e.target

    if (
      !target.closest('.modal-dialog') || 
      target.closest('.modal-close-button')
    ) body.classList.remove('modal-is-open')
  }
}

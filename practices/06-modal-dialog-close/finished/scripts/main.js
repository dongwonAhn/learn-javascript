;(() => {
  document.body.addEventListener('click', (e) => {
    console.log(e.target.localName)
  })
})

;(() =>{
  const body = document.body
  const modal_open_button = document.querySelector('main .modal-open-button')

  const modal_overlay = document.querySelector('.modal-overlay')
  const modal_close_button = modal_overlay.querySelector('.modal-close-button')
  
  modal_overlay.addEventListener('click', closeModalDialog)
  
  // const modal_dialog = modal_overlay.querySelector('.modal-dialog')
  // modal_dialog.addEventListener('click', (e) => {
    // e.stopPropagation()
    // console.log('[이벤트 버블링] 이벤트 전파 중지')
  // })

  modal_open_button.addEventListener('click', () => {
    body.classList.add('modal-is-open')
  })

  modal_close_button.addEventListener('click', closeModalDialog)

  function closeModalDialog(e) {
    const target = e.target

    if (
      !target.closest('.modal-dialog') ||
      target === modal_close_button
    ) {
      body.classList.remove('modal-is-open')
    }

  }

})()
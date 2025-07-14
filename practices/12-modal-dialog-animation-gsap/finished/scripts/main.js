/* global gsap */

{
  const body = document.body
  const modal_open_button = document.querySelector('main .modal-open-button')
  const modal_overlay = document.querySelector('.modal-overlay')
  const waveHand = modal_overlay.querySelector('.wave-hand')

  animateRisingUp()

  modal_open_button.addEventListener('click', openModalDialog)
  modal_overlay.addEventListener('click', closeModalDialog)

  function openModalDialog() {
    body.classList.add('modal-is-open')
    animateWaveHand()
  }

  function closeModalDialog(e) {
    const target = e.target

    if (
      !target.closest('.modal-dialog') || 
      target.closest('.modal-close-button')
    ) body.classList.remove('modal-is-open')
  }

  function animateRisingUp() {
    gsap.from('.point-hand', {
      y: 50,
      opacity: 0,
      duration: 1.25,
      ease: 'back.inOut(4)',
      repeat: -1,
      repeatDelay: 0.4,
    })
  }

  function animateWaveHand() {
    gsap
      .timeline({ defaults: { duration: 0.15 } })
      .from(waveHand, {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        delay: 0.3,
        ease: 'back.out(3)',
      })
      .set(waveHand, { transformOrigin: 'center bottom' })
      .to(waveHand, { rotation: 15 })
      .to(waveHand, { rotation: -15 })
      .to(waveHand, { rotation: 15 })
      .to(waveHand, { rotation: -15 })
      .to(waveHand, { rotation: 15 })
      .to(waveHand, { rotation: 0 })
  }
}

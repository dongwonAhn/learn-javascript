window.addEventListener('DOMContentLoaded', () => {
  // console.log('DOM Contents loaded')
  const dialog = document.querySelector('.dialog')
  // console.log(dialog) // HTMLFigureElement
  const closeButton = dialog.querySelector('button')
  // console.log(closeButton) // HTMLButtonElement
  closeButton.addEventListener('click', () => {
    // document.body.classList.add('dialog-is-hidden')
    dialog.classList.add('dialog-close')
  })
})

// 코드 실행 시점 관련 -> load, DOMContentLoaded 이벤트 (변경)
// window.addEventListener('load', () => {
//   console.log('Web Document All Resources loaded')
//   const dialog = document.querySelector('.dialog')
//   console.log(dialog) // HTMLFigureElement
// })

// <script> 요소를 통해 src에 있는 URL 리소스를 서버에 요청/응답
// 응답된 코드를 실행 처리 (소요 시간)
// HTML 해석이 멈춤 (마크업 생성이 안됨)

// const dialog = document.querySelector('.dialog')
// console.log(dialog) // null
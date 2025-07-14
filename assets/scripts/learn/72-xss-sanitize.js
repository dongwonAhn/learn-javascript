// --------------------------------------------------------------------------
// 📌 크로스 사이트 스크립팅(XSS) & 살균(Sanitize)
// --------------------------------------------------------------------------

/* global DOMPurify */

;(() => {
  
  const form = document.querySelector('form')
  const output = form.nextElementSibling

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const value = form.text.value.trim()
    // output.innerHTML = value
    // output.textContent = value
    console.log(value)
    output.innerHTML = DOMPurify.sanitize(value)
    console.log(DOMPurify.sanitize(value))
  })

})()
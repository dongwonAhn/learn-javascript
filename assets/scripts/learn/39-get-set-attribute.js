/* global byId, query, click, mouseenter */

// 외부로부터 코드 보호
// 블록 스코프
{
  const noticeElement = byId('notice')

  click(noticeElement, () => {
    noticeElement.setAttribute('contenteditable', true)
    noticeElement.setAttribute('data-role', 'student')
    noticeElement.setAttribute('data-status', 'offline')
    noticeElement.setAttribute('data-user-id', '1004')
  })

  const submitButton = query('form button[type="submit"]')

  mouseenter(submitButton, () => {
    const role = noticeElement.getAttribute('data-role')
    console.log('role =', role)
    const status = noticeElement.getAttribute('data-status')
    console.log('status =', status)
    const userId = noticeElement.getAttribute('data-user-id')
    console.log('userId =', userId)
    const category = noticeElement.getAttribute('data-category')
    console.log('category =', category)
    const idName = noticeElement.getAttribute('id')
    console.log('idName =', idName)
    const className = noticeElement.getAttribute('class')
    console.log('className =', className)
    // const className = noticeElement.classList.value
  })

  // const hobbyCheckbox = byId('hobby')
  // console.log(hobbyCheckbox.checked) // DOM property

}
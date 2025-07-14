// --------------------------------------------------------------------------
// 📌 추가된 이벤트 리스너 제거
// --------------------------------------------------------------------------

;(() => {
  
  // 항상 동일 참조 중요!!!!!
  function handleSameFunction() {
    console.log('테스트 버튼에 이벤트 연결')
  }

  const buttonGroup = document.querySelector('[role="group"]')
  const testerButton = buttonGroup.querySelector('[data-role="tester"]')

  buttonGroup.addEventListener('click', (e) => {
    const target = e.target.closest('button')
    
    if (target) {
      // 이벤트 리스너 추가
      if (target.dataset.role === 'add-event') {
        console.info('테스트 버튼에 이벤트 리스너 추가됨')
        testerButton.textContent = '이벤트 리스너 추가됨'

        // 테스트 버튼에 이벤트 리스너 추가
        testerButton.addEventListener('click', handleSameFunction)
        // testerButton.addEventListener('click', () => {
        //   console.log('테스트 버튼에 이벤트 연결')
        // })
      }
      
      // 추가된 이벤트 리스너 제거
      if (target.dataset.role === 'remove-event') {
        console.info('테스트 버튼에 이벤트 리스너 제거됨')
        testerButton.textContent = '이벤트 리스너 제거됨'
        testerButton.removeEventListener('click', handleSameFunction)
      }

    }
  })

})

// 이벤트 리스너 추가 후, 한 번 트리거 되면, 이벤트 리스너 제거
;(() => {

  const onceButton = document.querySelector('[data-role="once-event"]')
  
  let clickedCount = 0

  // onceButton.addEventListener('click', () => {
  //   clickedCount += 1
  //   console.log(clickedCount + '번 클릭했습니다.')
  // })

  // 한 번만 이벤트를 트리거 하려면?
  // 이벤트가 트리거 되면 추가된 이벤트 리스너를 제거한다.
  onceButton.addEventListener('click', handleOnceClick)

  function handleOnceClick(e) {
    clickedCount += 1
    console.log(clickedCount + '번 클릭했습니다.')
    e.currentTarget.removeEventListener('click', handleOnceClick)
    console.log('추가된 이벤트 리스너 handleOnceClick이 제거되었습니다.')
  }

})

// 이벤트 리스너 옵션(Options) 객체 설정으로 once 이벤트 구현하기
;(() => {
  
  const onceButton = document.querySelector('[data-role="once-event"]')
  
  let clickedCount = 0

  onceButton.addEventListener(
    'click',
    () => {
      console.log(++clickedCount + '번 클릭했어요!')
    },
    { once: true },
  )

})()
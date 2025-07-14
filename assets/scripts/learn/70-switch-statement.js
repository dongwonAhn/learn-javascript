// --------------------------------------------------------------------------
// 📌 switch 문 (조건문)
// --------------------------------------------------------------------------

// if 문 vs. switch 문 1
;(() => {

  // switch 문
  ;(() => {
    const isLightColor = '초록색'

    switch (isLightColor) {
      // 경우 A
      case '초록색': 
        console.log('좌우를 살피고 건널목을 건너세요!')
        break
      // 경우 B
      case '주황색': 
        console.log('안전을 위해 자리에 선 후, 다음 초록색 불을 기다리세요.')
        break
      // 기본 상황 : 경우 A도 B도 아닌 상황
      default: console.log('자리에 멈춰 초록색 불을 기다리세요.')
    }

  })()
  
  // if 문
  ;(() => {
    const isLightColor = '빨간색'

    if (isLightColor === '초록색') {
      console.log('좌우를 살피고 건널목을 건너세요!')
    } 
    else if (isLightColor === '주황색') {
      console.log('안전을 위해 자리에 선 후, 다음 초록색 불을 기다리세요.')
    } else {
      console.log('자리에 멈춰 초록색 불을 기다리세요.')
    }
  })

})

// switch 문
;(() => {
  const isLightColor = '빨간색'

  switch (isLightColor) {
    case '초록색': {
      console.log('좌우를 살피고 건널목을 건너세요!')
      break
    }
    case '주황색': {
      console.log('안전을 위해 자리에 선 후, 다음 초록색 불을 기다리세요.')
      break
    }
    default: 
      console.log('자리에 멈춰 초록색 불을 기다리세요.')
  }

})

// if 문 vs. switch 문 2
;(() => {

  // switch 문
  ;(() => {
    let 취미 = '독서'

    switch(취미) {
      case '수영': console.log('수영'); break
      case '영화 감상': console.log('영화 감상'); break
      case '게임': console.log('게임'); break
      case '조깅': console.log('조깅'); break
      default: console.log('아무 것도 안해요')
    }
  })()
  
  // if 문
  ;(() => {
    let 취미 = '독서'

    if (취미 === '수영') console.log('수영')
    else if (취미 === '영화 감상') console.log('영화 감상')
    else if (취미 === '게임') console.log('게임')
    else if (취미 === '조깅') console.log('조깅')
    else console.log('아무 것도 안해요')
  })()

})

// if 문 vs. switch 문 3
;(() => {

  // switch 문
  ;(() => {
    let 취미 = '조깅'
  
    switch(취미) {
      case '조깅': 
      case '수영':
      case '영화 감상':
      case '게임':
      case '등반': 
      case '등산': 
      case '음악 감상': 
      case '콘서트 가기': 
      case '독서': 
        console.log('매우 흥미로운 분이군요!!!')
        break
      default: console.log('재미있게 살면 좋겠습니다!!')
    }
  })()
  
  // if 문
  ;(() => {
    let 취미 = '독서'

    // 취미가 "수영" 또는 "영화 감상" 또는 "게임" 또는 "조깅"인 사람이라면?
    if (
      취미 === '수영' || 
      취미 === '영화 감상' ||
      취미 === '게임' ||
      취미 === '조깅' ||
      취미 === '등반' ||
      취미 === '등산' ||
      취미 === '음악 감상' ||
      취미 === '콘서트 가기' ||
      취미 === '독서'
    ) {
      // 매우 흥미로운 분이군요!!!
      console.log('매우 흥미로운 분이군요!!!')
    } else {
      // 그렇지 않으면 재미있게 살면 좋겠습니다!!
      console.log('재미있게 살면 좋겠습니다!!')
    }

  })()

})
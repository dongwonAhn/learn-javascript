// --------------------------------------------------------------------------
// 📌 생성/수정/삭제 요청
// --------------------------------------------------------------------------

// Fetch API (Modern)
;(() => {
  
  // 상품 생성
  // POST dummyjson.com/products/add
  createProduct({
    title: '내가 만든 상품!',
    price: 87000,
    rating: 4.76
  })
    .then(console.log)

  createProduct({
    title: '내가 만든 상품 2!',
    price: 54000,
    rating: 4.16
  })
    .then(console.log)

  createProduct({
    title: '내가 만든 상품 3!',
    price: 12000,
    rating: 4.99
  })
    .then(console.log)

  // 상품 수정
  // PUT dummyjson.com/products/:productId
  // PATCH dummyjson.com/products/:productId


  // 상품 삭제
  // DELETE dummyjson.com/products/:productId


  // API 클라이언트 유틸리티 함수
  function createProduct(productInfo/* { title, price, rating } */) {
    // Promise 객체 반환
    return fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(productInfo)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status + ': 오류가 발생!')
        }
        return response.json()
      })
      .catch(console.error)
      // .finally(() => console.log('요청 종료'))
  }

})


// XMLHttpRequest (Old)
;(() => {
  
  // 상품 생성
  // POST dummyjson.com/products/add
  createProduct(
    // 생성할 상품 정보 (객체)
    {
      title: '내가 만든 상품!',
      price: 87000,
      rating: 4.76,
    },
    // 응답 이후 처리될 콜백 함수
    ({ target: xhr }) => {
      // 응답이 실패한 경우
      // 오류 처리

      // 응답 성공한 경우
      const data = JSON.parse(xhr.response)
      console.log(data)

      // 데이터 정리
      // DOM 업데이트

    },
  )

  // API 클라이언트 유틸리티 함수
  function createProduct(productInfo, responseCallback) {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://dummyjson.com/products/add')
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.send(JSON.stringify(productInfo))
    xhr.addEventListener('load', responseCallback)
  }

})()
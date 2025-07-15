// --------------------------------------------------------------------------
// 📌 오류 처리
// --------------------------------------------------------------------------

// 문제 상황
// response.json()이 Promise를 반환하기 때문에
// throw new Error('오류 메시지 ?????????')
// Promise.reject('오류 메시지 ?????')
;(() => {
  
  fetch('https://api.github.com/user/repos')
    .then((response) => {
      // 빠른 반환
      if (response.ok) return response.json()	

      // 오류 처리 (response.json())

      // const errorResponse = response.json() // 비동기 처리 
      // return Promise.reject(new Error(errorResponse))


      // 오류 처리 (response.status)
      // let errorMessage = ''

      // switch(response.status) {
      //   case 400: errorMessage = '유효하지 않은 요청입니다.'; break
      //   case 401: errorMessage = '인증이 필요합니다.'; break
      //   case 404: errorMessage = '해당 리소스를 찾을 수 없습니다.'; break
      // }
      
      // return Promise.reject(new Error(errorMessage))
    })
    // .then((validOrInvalidResolveValue) => {

    // })
    .catch((error) => {
      document.body.innerHTML = `<div role="alert">${error.message}</div>`
      // console.error('오류 발생!', error)
    })

})

// 문제 해결 방법
;(() => {
  fetch('https://api.github.com/user/repos')
    // 비동기 요청 결과 검토
    .then((response) => {

      // 1. response.ok 참(resolve) 또는 거짓(reject)
      // 2. response.json() -> Promise -> .then((data)) -> 오류 메시지 = data.message

      return response.json().then((data) => {
        // 비동기 요청 성공한 경우
        // 이행(fulfilled)
        if (response.ok) return data

        // 비동기 요청 실패한 경우
        // 거절(rejected)
        // 오류 처리
        const errorMessage = data.message
        throw new Error(errorMessage) // Error { name, stack, message }
        // return Promise.reject(new Error(errorMessage))

        // console.log(data)
        // console.log(response.status)
        // console.log(response.ok)
        // return data
      })
    })
    // resolve 값이면 then() 콜백 실행
    .then((data) => console.log('then - data', data))
    // reject 값이면 catch() 콜백 실행
    .catch((error) => {
      // console.error('catch - error', error.message)

      const errorPrint = document.createElement('div')
      errorPrint.setAttribute('role', 'alert')
      errorPrint.style.cssText = `
        color: red;
        font-weight: 700;
        font-size: 2rem;
      `
      errorPrint.textContent = `오류 발생! ${error.message}`
      document.querySelector('h1').after(errorPrint)

    })

})()
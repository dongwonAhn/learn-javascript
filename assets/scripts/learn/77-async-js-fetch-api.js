/* global DOMPurify */

// --------------------------------------------------------------------------
// 📌 Fetch API (웹 브라우저에서 기본 제공 API)
// --------------------------------------------------------------------------

;(() => {
  
  // 전역 함수 ----------------------------------------------------------------
  // fetch(url, options)

  // 요청
  // URL
  // fetch() 함수가 실행되면 바로 URL(API 서버)에 요청
  // fetch() 함수는 Promise 객체 반환
  const promise = fetch('https://api.github.com/users/yamoo9/repos')
  
  // OPTIONS
  // fetch 옵션(서버에 보낼 요청의 선택사항)
  // const response = fetch('https://api.github.com/users/yamoo9', {
  //   method: '요청 방법',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: '요청 보낼 때 전송할 데이터(문자열)'
  // })
  
  // PROMISE
  // Promise 객체 : 보류 중 <pending>
  // console.log(promise)
  // Promise.then(callback)

  // 응답 처리
  // RESPONSE
  // 서버에서 전달된 응답을 처리하는 Response 객체
  promise
    // [1] 처리
    //     Response의 json() 메서드 결과 반환
    .then((response) => {
      // HTTP 상태(Status) 코드
      // console.log(response.status) // 200
      // 응답 상태 성공(ok)
      // console.log(response.ok) // true
      // 응답을 보낸 서버 URL
      // console.log(response.url) // https://api.github.com/users/yamoo9/repos
      // 보안과 관련된 정책
      // console.log(response.type) // 'cors'
      // 응답된 본문(body) 데이터
      // console.log(response.body) // ReadableStream
      // 응답 데이터를 JavaScript 객체로 변환
      // .json() 메서드 사용
      // response.json() -> Promise { <pending> }
      // console.log(response.json())

      // 응답 객체의 json() 메서드를 사용해 JavaScript 객체로 변환 반환
      return response.json()
    })
    // [2] 처리
    //     Response의 json() 메서드 결과가 매개변수로 전달됨
    .then((responseData) => {
      console.log({ responseData })
    })

  // --------------------------------------------------------------------------------------
  // 학습 내용 정리
  // --------------------------------------------------------------------------------------
  //  1. fetch() 함수는 전역 함수이다.
  //  2. fetch() 함수는 서버의 url을 첫 번째 매개변수로 전달받는다. 
  //  3. 필요한 경우 fetch() 함수의 두 번째 매개변수로 options을 전달받는다.
  //  4. fetch() 함수의 옵션 객체는 요청 방법(method), 요청 헤더(headers), 요청 본문(body) 등으로 구성된다.
  //  5. fetch() 함수의 반환 값은 Promise 객체이다.
  //  6. Promise 객체는 .then() 메서드를 가지며, 콜백 함수를 전달받는다.
  //  7. .then() 메서드에 설정된 콜백 함수는 서버에서 응답이 오면 실행된다.
  //  8. .then() 메서드의 콜백 함수는 응답(Response) 객체를 매개변수로 전달받는다.
  //  9. Response 객체는 상태(status), 성공(ok) 등 여러 정보를 제공한다.
  // 10. Response 객체의 .json() 메서드를 사용하면 ReadableStream 데이터를 JS 객체로 변경할 수 있다.
  // 11. .json() 메서드 결과는 비동기로 처리되므로 다음 .then()에서 처리된다.
  // 12. 다음 .then() 메서드의 콜백 함수는 처리된 JS 객체를 전달받는다.
})

;(() => {
  // 비동기 자바스크립트를 사용해 서버와 비동기 통신(페칭: fetcing 요청/응답)
  const promise = fetch('https://api.github.com/users/yamoo9/repos')
  
  promise
    // [2]
    .then((response) => response.json())
    // .then(console.log)
    // [3]
    .then((responseData) => {
      // 데이터 정리(가공)
      const massagedData = responseData.map(
        ({ git_url, description, owner: { avatar_url, login } }) => {
          // 정리된 객체 생성 및 반환
          return {
            url: git_url,
            description,
            avatar: avatar_url,
            account: login,
          }
        },
      )

      // 비동기 통신 이후, 데이터 변경이 완료된 이후에 DOM 업데이트
      // console.log(reposList, responseData) 

      // 동적으로 마크업 코드(template) 생성
      const listTemplate = massagedData.map(({ url, description, avatar, account }) => {
        // const linkContent = url.replace('git://', '').replace('.git', '')
        // 정규 표현식(Regular Expression, RegExp)
        const linkContent = url.replace(/^git:\/\/|.git$/g, '')
        const linkHref = `https://${linkContent}`
        return `
          <li>
            <h3>${account}</h3>
            <img src="${avatar}" alt="" height="40" width="40" />
            <a href="${linkHref}">${linkContent}</a>
            <p>${description}</p>
          </li>
        `
      }).join('')

      // reposList.insertAdjacentHTML('beforeend', DOMPurify.sanitize(listTemplate))
      reposList.innerHTML = DOMPurify.sanitize(listTemplate)

    })
    //
    .catch((error) => {
      console.error(error.message)
    })

  // 비동기 통신 이후, DOM 업데이트
  const reposList = document.querySelector('.repos-list')
  console.log(reposList) // [1]

})

;(() => {
  
  const reposList = document.querySelector('.repos-list')
  const promise = fetch('https://api.github.com/users/yamoo9999/repos')
  
  promise
    .then((response) => {
      
      if (!response.ok) {
        // 오류를 생성해서 전달(던져라!)
        throw new Error('알 수 없는 오류가 발생했습니다! ❌')
      }

      return response.json()
    })
    .then(messageTheData)
    .then(generateTemplate)
    .then(updateDOM)
    .catch(catchError)
    .finally(runFinally)


  function messageTheData(data) {
    return data?.map?.(
      ({ git_url, description, owner: { avatar_url, login } }) => {
        return {
          url: git_url,
          description,
          avatar: avatar_url,
          account: login,
        }
      },
    )
  }

  function generateTemplate(data) {
    return data
      ?.map?.(({ url, description, avatar, account }) => {
        const linkContent = url.replace(/^git:\/\/|.git$/g, '')
        const linkHref = `https://${linkContent}`
        return `
        <li>
          <h3>${account}</h3>
          <img src="${avatar}" alt="" height="40" width="40" />
          <a href="${linkHref}">${linkContent}</a>
          <p>${description}</p>
        </li>
      `
      })
      .join('')
  }

  function updateDOM(template) {
    reposList.innerHTML = DOMPurify.sanitize(template)
  }

  function catchError(error) {
    console.error(error.message)
  }

  function runFinally() {
    alert('데이터 요청/응답 성공 또는 실패와 상관없이 항상 최종적으로 이 코드는 실행됩니다.')
  }

})()
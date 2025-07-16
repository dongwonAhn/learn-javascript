// --------------------------------------------------------------------------
// 📌 CORS | JSONP | Proxy Server
// --------------------------------------------------------------------------

// CORS를 허용하지 않는 API
// 참고: https://getjsonip.com/
const API_ENDPOINT = 'https://jsonip.com'


// CORS (Cross Origin Resource Sharing) 정책에 의해 오류 발생
;(() => {

  fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then(console.log)
    .catch(console.error)
})


// JSONP (JSON with Padding)
;(() => {

  jsonp(API_ENDPOINT, (response) => {
    console.log(response)
  })


  /**
   * JSONP를 사용해 API를 호출하는 함수
   * 
   * @param {string} url API 서버 주소
   * @param {string} callback API 응답을 전달받을 함수 -> 전역 함수로 설정
   */
  function jsonp(url, callback) {  
    // 전역에 공개할 함수 이름을 동적으로 생성  
    const fnName = `${url.replace(/^https:\/\/|\.[^./]+$/g, '')}Fn`

    const script = document.createElement('script')
    script.setAttribute('src', `${url}/${fnName}`)
    // script.src = `${url}/${fnName}`

    script.addEventListener('error', () => {
      console.error('문제가 발생했습니다. 나중에 다시 시도해주세요.')
    })

    document.body.append(script)

    // 전달된 callback 함수를 전역 함수로 공개
    globalThis[fnName] = callback
    // window['jsonipFn']
    // window.jsonipFn = callback
  }
  
})


// Proxy Server (https://corsproxy.io/demo)
// - 무료로 사용할 경우, 로컬 테스트에서만 가능
// - 실제 서비스에서 사용할 경우, 유료(월 16,655원)
;(() => {

  fetchByProxy(API_ENDPOINT)
    .then(console.log)
    .catch(console.error)


  /**
   * 프록시 서버를 사용해 데이터를 페칭하는 함수
   * 
   * @param {string} url API 서버 주소
   * @returns {Promise<any>} Promise<데이터>
   */
  function fetchByProxy(url) {
    return fetch(`https://corsproxy.io/?url=${url}`)
      .then((response) =>
        response.json().then((responseData) => {
          if (!response.ok) throw new Error(responseData.message)
          return responseData
        }),
      )
  }

})


// Proxy Server (로컬 서버 테스트)
// - Node.js 환경에서 구동되는 로컬 프록시 서버 (http://localhost:4000)
// - 배포 시, 무료 사용 가능 (예: http://render.com)
;(() => {

  // GET 요청 테스트
  fetchByProxy(API_ENDPOINT)
    .then(console.log)
    .catch(console.error)
  
  // ---------------------------------------------
  // 간단한 HTTP 요청/응답 서비스
  // https://httpbin.org/

  // POST 요청 테스트
  fetchByProxy('https://httpbin.org/post', {
    method: 'POST',
    body: JSON.stringify({ name: 'yamoo9' })
  })
    .then((response) => {
      console.log('POST', response)
    })
    .catch(console.error)
  
  // PUT 요청 테스트
  fetchByProxy('https://httpbin.org/put', {
    method: 'PUT',
    body: JSON.stringify({ name: 'yamoo9' })
  })
    .then((response) => {
      console.log('PUT', response)
    })
    .catch(console.error)
  
  // PATCH 요청 테스트
  fetchByProxy('https://httpbin.org/patch', {
    method: 'PATCH',
    body: JSON.stringify({ name: 'yamoo9' })
  })
    .then((response) => {
      console.log('PATCH', response)
    })
    .catch(console.error)

  // DELETE 요청 테스트
  fetchByProxy('https://httpbin.org/delete', {
    method: 'DELETE'
  })
    .then((response) => {
      console.log('DELETE', response)
    })
    .catch(console.error)

  
  /**
   * 프록시 서버를 사용해 데이터를 페칭하는 함수
   * 
   * @param {string} url API 서버 주소
   * @returns {Promise<any>} Promise<데이터>
   */ 
  function fetchByProxy(url, config = {}) {
    return fetch(`http://localhost:4000/proxy?url=${url}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      ...config
    })
      .then((response) => {
        const contentType = response.headers.get('content-type')
        let methodName = 'text'

        if (contentType.includes('application/json')) {
          methodName = 'json'
        } 
        
        if (
          contentType.includes('image/') || 
          contentType.includes('application/octet-stream')
        ) {
          methodName = 'blob'
        }
        
        const resposeDataPromise = response[methodName]()

        resposeDataPromise.then((responseData) => {
          // 거절
          if (!response.ok) return Promise.reject(new Error(responseData.message))
          // 이행
          return responseData
        })

        return resposeDataPromise
      })
  }

  const euid = {
    get(url) {
      return fetchByProxy(url)
    },
    post(url, data, config) {
      return fetchByProxy(url, {
        method: 'POST',
        body: JSON.stringify(data),
        ...config
      })
    },
    put() {

    },
    patch() {

    },
    delete() {

    }
  }

  // 객체 동결(freezing)
  Object.freeze(euid)

  globalThis.euid = euid


})()
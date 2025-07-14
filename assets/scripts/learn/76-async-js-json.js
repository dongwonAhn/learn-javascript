// --------------------------------------------------------------------------
// 📌 JSON (JavaScript Object Notation)
// --------------------------------------------------------------------------

;(() => {
  
  const macbookPro = {
    operatingSystem: 'macOS Sequoia 15.5(24F74)',
    processor: '2.4GHz 8core Intel Core i9',
    memory: 64,
  }

  console.log(macbookPro) // JavaScript Object

  // ---------------------------------------------------------------
  // 클라이언트 -> 서버 요청 데이터
  // JavaScript 객체 -> JSON 문자화 

  // Client -> Request (XHR) -> Server 
  const jsonString = JSON.stringify(macbookPro)
  console.log(jsonString) // JSON String
  // '{"operatingSystem":"macOS Sequoia 15.5(24F74)","processor":"2.4GHz 8core Intel Core i9","memory":64}'
  
  const jsonStringWithReplacer = JSON.stringify(macbookPro, ['memory'])
  console.log(jsonStringWithReplacer) // JSON String
  // '{"memory":64}'
  
  const jsonStringWithSpace = JSON.stringify(macbookPro, null, 2)
  console.log(jsonStringWithSpace) // JSON String
  // {
  //   "operatingSystem": "macOS Sequoia 15.5(24F74)",
  //   "processor": "2.4GHz 8core Intel Core i9",
  //   "memory": 64
  // }


  // ---------------------------------------------------------------
  // 서버 -> 클라이언트 응답 데이터 
  // JSON 문자열 -> JavaScript 객체화

  const notebookInfo = JSON.parse(jsonString, 
    /* reviver */
    (key, value) => {
      if (typeof value === 'string') {
        return value.toUpperCase()
      }
      
      if (typeof value === 'number') {
        return value * 2
      }

      return value
    }
  )
  
  console.log(notebookInfo)

})

;(() => {
  
  const request = new XMLHttpRequest()

  request.open('GET', 'https://api.github.com/users/yamoo9/repos')

  request.send()

  request.addEventListener('load', ({ target: xhr }) => {
    const repos = JSON.parse(xhr.response)
    console.log(repos)

    // 데이터 정리 (Data Massaging)
    // - 저장소 이름(`name`)
    // - 저장소 공개 여부(`private`)
    // - 저장소 URL (`html_url`)

    const massagedRepos = repos.map((repo) => {
      return {
        name: repo.name,
        private: repo.private,
        url: repo.html_url,
      }
    })
    
    // const massagedRepos = repos.map((repo) => ({
    //   name: repo.name,
    //   private: repo.private,
    //   url: repo.html_url,
    // }))

    // const massagedRepos = repos.map(({ name, private, html_url: url }) => ({
    //   name,
    //   private,
    //   url,
    // }))

    console.log(massagedRepos)
    
  })

})

;(() => {
  
  // 자신(계정)의 GitHub 저장소 
  // 비동기 통신으로 API 서버에 데이터 조회(GET)
  const ENDPOINT = 'https://api.github.com/users/yamoo9'

  // XMLHttpRequest 객체 생성
  const request = new XMLHttpRequest()

  // 생성된 XMLHttpRequest 객체의 open(method, endpoint) 어떤 방법으로 어디에 요청할 것인 구성
  request.open('GET', ENDPOINT)

  // 생성된 XMLHttpRequest 객체의 헤더(headers) 설정
  request.setRequestHeader('Content-Type', 'application/json')
  
  // 생성된 XMLHttpRequest 객체의 send() 요청 및 데이터 보내기
  request.send(null)

  // 생성된 XMLHttpRequest 객체의 load 이벤트 리스너 추가 (서버의 응답 감지)
  request.addEventListener('load', (e) => {
    const xhr = e.target

    console.log(xhr.status) // 200 OK
    console.log(xhr.response) // JSON String

    // JSON 문자열 -> JavaScript 객체 변환
    let data = JSON.parse(xhr.response)
    console.log(data) // JavaScript Object

    // 데이터 정리
    data = Object.entries(data).reduce((massgedObject, [key, value]) => {
      switch (key) {
        case 'bio':
        case 'avatar_url':
        case 'name':
        case 'location':
        case 'login':
        case 'public_repos ': 
          massgedObject[key] = value
          break
      }

      return massgedObject
    }, {})

    console.log(data)

    // 정리된 데이터를 통해 DOM 업데이트
  })

})()

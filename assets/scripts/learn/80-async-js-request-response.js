// --------------------------------------------------------------------------
// 📌 요청(Request) / 응답(Response)
// --------------------------------------------------------------------------

// Request / Response
;(() => {

  // -------------------------------------------
  // 요청(Request : Client -> Server) 
  // - 엔드포인트
  //   - 루트 엔드포인트(root endpoint)
  //   - 패스(path : `path1/:variable/path2`)
  //   - 쿼리 파라미터(query parameters)
  // - 메서드
  //   - GET (조회)
  //   - POST (생성)
  //   - PUT (수정)
  //   - PATCH (수정)
  //   - DELETE (삭제)
  // - 헤더
  //   - Content-Type: application/json
  // - 바디
  //   - JSON.stringify(data)

  // -------------------------------------------
  // 응답(Response : Server -> Client)

  // - 상태
  //   - 1xx
  //   - 2xx : 200 OK / 201 CREATED
  //   - 3xx
  //   - 4xx : 404 NOT FOUND
  //   - 5xx : 500 INTERNAL SERVER ERROR
  // - 헤더
  // - 바디
  //   - JSON.parse(jsonString)
  //   - response.json()

})

// C.R.U.D
;(() => {
  
  // Create : 생성 (POST)
  // Read   : 조회 (GET)
  // Update : 수정 (PATCH / PUT)
  // Delete : 삭제 (DELETE)

})()
{
  const users = [
    { id: 1, name: '지수', location: '서울', nationality: '대한민국' },
    { id: 2, name: '유키', location: '오사카', nationality: '일본' },
    { id: 3, name: '아리아', location: '뉴욕', nationality: '미국' },
    { id: 4, name: '유나', location: '부산', nationality: '대한민국' },
    { id: 5, name: '마테오', location: '방콕', nationality: '태국' },
    { id: 6, name: '올리비아', location: '토론토', nationality: '캐나다' },
    { id: 7, name: '노아', location: '베를린', nationality: '독일' },
    { id: 8, name: '민지', location: '인천', nationality: '대한민국' },
    { id: 9, name: '에이든', location: '파리', nationality: '프랑스' },
    { id: 10, name: '현지', location: '대구', nationality: '대한민국' },
    { id: 11, name: '루카스', location: '도쿄', nationality: '일본' },
    { id: 12, name: '아일라', location: '로스앤젤레스', nationality: '미국' },
    { id: 13, name: '은우', location: '광주', nationality: '대한민국' },
    { id: 14, name: '밀라', location: '하노이', nationality: '베트남' },
    { id: 15, name: '지민', location: '제주', nationality: '대한민국' },
    { id: 16, name: '히로', location: '교토', nationality: '일본' },
    { id: 17, name: '엠마', location: '시카고', nationality: '미국' },
    { id: 18, name: '유토', location: '나고야', nationality: '일본' },
    { id: 19, name: '클로이', location: '시드니', nationality: '호주' },
    { id: 20, name: '지원', location: '대전', nationality: '대한민국' },
    { id: 21, name: '레비', location: '런던', nationality: '영국' },
    { id: 22, name: '서진', location: '수원', nationality: '대한민국' },
    { id: 23, name: '유키', location: '후쿠오카', nationality: '일본' },
    { id: 24, name: '메이슨', location: '멜버른', nationality: '호주' },
    { id: 25, name: '하나', location: '상하이', nationality: '중국' },
  ]

  // 실습 1. 거주지 일치, 인덱스 출력
  ;(() => {
    
    let location = '부산'
    let foundMatchIndex = users.findIndex((user) => user.location === location)
    const matchIndexUser = users[foundMatchIndex]
    console.log(matchIndexUser)

  })

  // 실습 2. 국적 일치, 사용자 이름 출력
  ;(() => {
    
    let nationality = '아프리카'

    const foundUser = users.find(user => user.nationality === nationality)
    console.log(foundUser ? foundUser.name : '그런 사람 없습니다.')

  })

  // 실습 3. 국적 일치, 사용자 그룹 출력
  // - `users` 배열의 각 항목과 비교해 일치할 경우, 국적을 필터링한 사용자 그룹 출력
  // - `<option>` 요소의 `value` 값이 빈 문자열인 경우, 모든 사용자를 포함한 그룹 출력
  // - 사용자 그룹 출력 시, `JSON.stringify(filteredUsers, null, 2)` 구문 활용
  ;(() => {
    let selectedValue = '일본'
    const filteredUsers = users.filter(user => {
      return user.nationality === selectedValue
    })

    console.log(JSON.stringify(filteredUsers, null, 2))
  })()

}
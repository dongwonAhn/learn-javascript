// --------------------------------------------------------------------------
// 📌 명령형(Imperative) vs. 선언적(Declarative)
// --------------------------------------------------------------------------

// 전역 변수
const fruitsBasket = '키위 사과 배 참외 키위 망고 파인애플 키위 수박 키위'.split(' ')

// 명령형 코드로 작성된 getPearCount 함수
function getPearCount(fruitsBasket) {
  let pearCount = 0

  for (let fruit of fruitsBasket) {
    if (fruit === '배') {
      pearCount = pearCount + 1
    }
  }
  
  return pearCount
}

// 선언적 코드로 작성된 getKiwiCount 함수
function getKiwiCount(fruitsBasket) {
  return fruitsBasket.filter((fruit) => fruit === '키위').length
}


// 명령형 코드
;(() => {
  console.log(1 + 1) // 2

  let kiwiCount = 0

  for (let fruit of fruitsBasket) {
    if (fruit === '키위') kiwiCount += 1
  }

  console.log(kiwiCount)
  
})

// 선언적 코드
;(() => {
  
  // 선언적 (과일바구니 안에서 키위의 갯수를 구해라)
  let kiwiCount = getKiwiCount(fruitsBasket)
  console.log(kiwiCount) // 3

  let pearCount = getPearCount(fruitsBasket)
  console.log(pearCount) // 1
  
})

// --------------------------------------------------------------------------
// 📌 유용한 JS 기능 리마인드
// --------------------------------------------------------------------------
//    - .findIndex()
//    - .find()
//    - .filter()
//    - .forEach()
//    - .map()
//    - .join()
//    - .reduce()
//    - .flat()
// --------------------------------------------------------------------------
//    - Object.entries()
//    - Object.values()
//    - Object.keys()
// --------------------------------------------------------------------------
;(() => {
  
  const numbers = [10, 11, 12, 13, 14, 15]

  // 13의 인덱스 가져오기
  // 명령형 코드: for 문을 사용
  // 선언적 코드: 배열 객체의 findIndex() 메서드 사용
  ;(() => {
    
    let foundIndex = numbers.findIndex((n) => n === 13)
    console.log(foundIndex)

  })

  const users = [
    { name: '성호', age: 17, role: '고등학생' },
    { name: '호준', age: 19, role: '고등학생' },
    { name: '나설', age: 22, role: '대학생' },
    { name: '형민', age: 12, role: '초등학생' },
    { name: '준경', age: 25, role: '알바생' },
  ]

  // "나설" 이름 찾기
  // 명령형 코드: for문 사용
  // 선언적 코드: 배열 객체의 find() 메서드 사용
  ;(() => {
    
    const foundUser = users.find((user) => user.name === '나설')
    console.table(foundUser)

  })

  // 학생만 걸러 새로운 학생 집단 생성
  // 명령형 코드: for문 사용
  // 선언적 코드: 배열 객체의 filter() 메서드 사용
  ;(() => {
    
    const students = users.filter(({ role }) => role.endsWith('학생'))
    console.log(students)

  })

  // 사용자 이름 콘솔 패널에 출력
  // 명령형 코드: for문 사용
  // 선언적 코드: 배열 객체의 forEach() 메서드 사용
  ;(() => {
    
    users.forEach(({ name }) => console.log(name))

  })
  
  // 사용자 집단을 순환해 
  // 국적 추가 후, 새 집단 생성
  // 명령형 코드: for문 사용
  // 선언적 코드: 배열 객체의 map() 메서드 사용
  ;(() => {

    const korean = users.map((user) => {
      // user 객체 복제해서 새로운 사용자를 생성

      // 전개 구문을 사용해 복제된 새 사용자 생성
      // 생성된 새 사용자의 국적 추가
      const newUser = { ...user, nationality: '대한민국' }
      
      // 명령형 코드: for...in문 사용
      ;(() => {
        const newUser = {}

        for (const key in user) {
          // const value = user[key]
          newUser[key] = user[key]
        }
        // 사용자를 복제한 새 사용자에게 국적 추가
        newUser.nationality = '대한민국'
      })

      // 생성된 사용자를 반환
      return newUser
    })

    console.log(korean)
    console.log(users)
    
  })

  const techTerms = [
    {
      term: '알고리즘',
      description: '문제를 해결하기 위한 단계적 절차나 방법을 의미합니다.'
    },
    {
      term: '데이터베이스',
      description: '데이터를 체계적으로 저장하고 관리하는 시스템입니다.'
    },
    {
      term: '프론트엔드',
      description: '사용자가 직접 보는 웹사이트나 애플리케이션의 화면 부분을 개발하는 영역입니다.'
    },
    {
      term: '백엔드',
      description: '서버, 데이터베이스 등 사용자가 직접 보지 않는 부분을 개발하는 영역입니다.'
    },
    {
      term: 'API',
      description: '애플리케이션이 서로 소통할 수 있도록 도와주는 인터페이스입니다.'
    },
    {
      term: '클라우드 컴퓨팅',
      description: '인터넷을 통해 서버, 저장소, 소프트웨어 등 컴퓨팅 자원을 제공하는 기술입니다.'
    }
  ]

  // 템플릿 코드 작성
  // 명령형 코드: for문 사용
  // 선언적 코드: 배열 객체의 map() + join() 메서드 사용
  ;(() => {
    
    const descListTemplate = `
      <dl class="tech-terms">
        ${techTerms
            .map(({ term, description }) => `<dt>${term}</dt><dd>${description}</dd>`)
            .join('')
        }
      </dl>
    `

    console.log(descListTemplate)

  })
  
  // 템플릿 코드 작성
  // 명령형 코드: for문 사용
  // 선언적 코드: 배열 객체의 reduce() 메서드 사용
  ;(() => {
    
    const descListTemplate = `
      <dl>
        ${techTerms.reduce((templateCode, { term, description }) => {
          return `${templateCode}<dt>${term}</dt><dd>${description}</dd>`
        }, '')}
      </dl>
    `

    console.log(descListTemplate)

  })

  const timeTable = {
    '월요일': ['수학', '영어', '체육'],
    '화요일': ['국어', '사회', '음악'],
    '수요일': ['과학', '미술', '수학'],
    '목요일': ['영어', '국어', '체육'],
    '금요일': ['사회', '과학', '음악'] 
  }

  // 과목별 갯수를 포함하는 객체 생성 
  // reduce() 활용
  ;(() => {
    
    // 타임테이블의 요일별 과목 배열 값들로 구성된 배열 생성
    const nestedSubjecArray = Object.values(timeTable)

    // 과목 배열 값으로 구성된 배열을 평탄화
    // 평탄화(Flatting)란?
    // [[1, 2], [3, 4]] -> [1, 2, 3, 4]
    const flattedSubjectArray = nestedSubjecArray.reduce((result, subjectArray) => {
      // acc = ['수학', '영어', '체육', '국어', '사회', '음악']
      // return [...['수학', '영어', '체육', '국어', '사회', '음악'], ...['과학', '미술', '수학']]
      return [...result, ...subjectArray]
    }, [])

    // 평탄화된 과목 배열을 순환해 과목별 갯수를 가진 객체 생성
    // { 국어: 2, 수학: 2, ... }
    const subjectCountObject = flattedSubjectArray.reduce((accumulator, subjectKey) => {
      // o = {}
      // o[key] = key
      // o["수학"] = 1 -> { '수학': 1 }
      // o = { '수학': 1 }
      // o["수학"] = o["수학"] + 1 -> { '수학': 2 }
      // o["수학"] += 1 -> { '수학': 2 }
      if (!accumulator[subjectKey]) {
        accumulator[subjectKey] = 1
      } else {
        accumulator[subjectKey] += 1
      }

      return accumulator
    }, {})

    console.log(subjectCountObject)

  })

  ;(() => {

    const subjectCountObject = Object
      .values(timeTable)
      .flat()
      .reduce((object, key) => {
        if (!object[key]) object[key] = 1 
        else object[key] += 1
        return object
      }, {})

    console.log(subjectCountObject)
  })()

})


// --------------------------------------------------------------------------
// 📌 실습
// --------------------------------------------------------------------------

// 출석 체크된 학생 수 세기
// 출석한 학생만 골라서 출석자 수를 계산해 콘솔 패널에 출력해보세요.
;(() => {
  
  const students = [
    { id: 1, name: '김지훈', email: 'jihun.kim@example.com', isPresent: true },
    { id: 2, name: '박아름', email: 'areum.park@example.com', isPresent: false },
    { id: 3, name: '이민수', email: 'minsu.lee@example.com', isPresent: true },
    { id: 4, name: '최수빈', email: 'subin.choi@example.com', isPresent: true },
    { id: 5, name: '정하늘', email: 'haneul.jung@example.com', isPresent: false },
    { id: 6, name: '윤다현', email: 'dahyun.yoon@example.com', isPresent: true },
    { id: 7, name: '한지민', email: 'jimin.han@example.com', isPresent: false },
    { id: 8, name: '오세영', email: 'seyoung.oh@example.com', isPresent: true },
    { id: 9, name: '서윤호', email: 'yunho.seo@example.com', isPresent: true },
    { id: 10, name: '배예진', email: 'yejin.bae@example.com', isPresent: false },
  ]
  
  // 2. 선언적 코드
  ;(() => {
    
    const attendance = students.filter(({ isPresent }) => isPresent)
    console.log(attendance.length)

  })()

  // 1. 명령형 코드
  ;(() => {
    // 새 배열 생성 변수에 참조
    // for문 사용 순환해서 조건문으로 걸러낸 각 항목을 생성한 배열의 원소로 추가
  })

})

// 판매 가능한 상품명 출력
// 재고가 있는 상품만 걸러내 상품명을 콘솔 패널에 출력하세요.
;(() => {

  const products = [
    { id: 1, name: '파운데이션', stock: 5, price: 32000 },
    { id: 2, name: '블러셔', stock: 0, price: 17000 },
    { id: 3, name: '아이섀도우', stock: 12, price: 22000 },
    { id: 4, name: '립스틱', stock: 3, price: 15000 },
    { id: 5, name: '브러시 세트', stock: 7, price: 28000 },
    { id: 6, name: '아이라이너', stock: 4, price: 13000 },
    { id: 7, name: '마스카라', stock: 2, price: 16000 },
    { id: 8, name: '컨실러', stock: 6, price: 21000 },
    { id: 9, name: '하이라이터', stock: 0, price: 18000 },
    { id: 10, name: '쿠션 팩트', stock: 8, price: 35000 },
  ]

  // console.log(products)

  // 2. 선언적 코드
  ;(() => {
    
    const filteredProducts = products.filter(({ stock }) => stock > 0)
      
    console.log(filteredProducts)

    filteredProducts.forEach(({ name }) => console.log(name))

  })()

  // 1. 명령형 코드
  ;(() => {
    
  })

})()
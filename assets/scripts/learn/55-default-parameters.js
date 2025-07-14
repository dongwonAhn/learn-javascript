// --------------------------------------------------------------------------
// 📌 매개변수 기본값 (Default Parameters)
// --------------------------------------------------------------------------

;(() => {
  
  function query(selector, context = document) {
    // if (!context) context = document
    // const element = (context || document).querySelector(selector)
    const element = context.querySelector(selector)
    return element
  }
  
  function queryAll(selector, context = document) {
    // if (!context) context = document
    // const nodeList = (context || document).querySelectorAll(selector)
    const nodeList = context.querySelectorAll(selector)
    return nodeList
  }

  const body = query('body')
  const h1 = query('h1')
  const button = query('button', query('header[data-index="2"]'))
  const buttons = queryAll('button', document.getElementById('contoller'))

  console.log(body)
  console.log(h1)
  console.log(button)
  console.log(buttons)

})

;(() => {

  const calculateTaxes = (income, taxRate = 0.033) => {
    console.log(taxRate)
    return income * taxRate
  }

  let tax = calculateTaxes(10000)
  tax = calculateTaxes(90000, 0.04)
  console.log(tax)

})

// 선택적 매개변수 설정
;(() => {
  // function createUser(
  //   name, age, job, location, email, password
  // ) {

  //   const user = {}

  //   user.name = name
  //   user.age = age
  //   user.job = job
  //   user.location = location
  //   user.email = email
  //   user.password = password

  //   return user

  // }

  // 함수에 전달할 인수의 순서를 정확히 기억해야!
  // let lee = createUser('이현준', 21, '대학생', '서울', 'leehj@edu.io', 'lee@21seoul')

  function createUser(name, age, etcInfo = {}) {
    // 매개변수 구조 분해 할당
    const { bio = '', friends = [] } = etcInfo
    
    const user = {}

    user.name = name
    user.age = age
    user.bio = bio
    user.friends = friends

    return user

  }

  // 객체 타입을 함수에 전달할 인수로 설정하면 객체의 속성을 모두 기억할 필요가 없다.
  const lee = createUser('이재홍', 21, { friends: ['박현준', '김재수'], bio: '지역에서 착하기로 소문난 농사꾼' })
  console.log(lee)

  const park = createUser('박선홍', 19)
  console.log(park)

})

// 선택적 매개변수 설정 (구조 분해 할당 + 기본 매개변수)
;(() => {

  function createUser(name, age, { bio = '', friends = [] } = {}) {
    const user = {}
    user.name = name
    user.age = age
    user.bio = bio
    user.friends = friends

    return user

  }

  const park = createUser('박선홍', 19)
  console.log(park)

})

;(() => {

  const aLink = document.querySelector('h1 > a')

  aLink.addEventListener('click', handleClick1)
  aLink.addEventListener('click', handleClick2)

  // 매개변수를 그대로 사용할 때
  function handleClick1(e) {
    // 브라우저 기본 작동 방지
    e.preventDefault()

    // const aElement = e.currentTarget
    // const { currentTarget: aElement } = e 

    // 이벤트가 연결된 대상의 속성 가져오기
    const relValue = e.currentTarget.getAttribute('rel')
    console.log(relValue)

    // 이벤트가 연결된 대상의 속성 설정하기
    e.currentTarget.removeAttribute('rel')
    e.currentTarget.setAttribute('lang', 'ko')
    e.currentTarget.textContent = '자바스크립트'

    console.log(e.type)

  }

  // 매개변수를 구조 분해 할당했을 때
  function handleClick2({ currentTarget: aElement, type }) {
    
    console.log(type)

    // preventDefault() // Uncaught TypeError: Illegal invocation
    
    const relValue = aElement.getAttribute('rel')
    console.log(relValue)

    aElement.removeAttribute('rel')
    aElement.setAttribute('lang', 'ko')
    aElement.textContent = '자바스크립트'

  }


})


;(() => {
  /* global gsap */

  // GSAP API
  // gsap.to(target(s), x, y, duration, rotation, opacity, delay, repeat, yoyo, repeatDelay, ...)
  gsap.set('h1', { opacity: 0 })

  setTimeout(() => {
    gsap
      .fromTo('h1', 
      /* vars options */
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 100,
      }
    )
  }, 500)

})
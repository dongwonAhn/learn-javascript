// --------------------------------------------------------------------------
// 📌 DOM에 여러 요소 추가
// --------------------------------------------------------------------------

// 요소(Element) 객체의 유용한 메서드
;(() => {

  const list = document.querySelector('.ramen-cooking-recipe')
  
  // prepend()
  // 부모 요소의 첫 번째 자식 요소로 삽입
  
  const prependElements = [
    createElement('li', '맛있는 면을 준비합니다.'),
    createElement('li', '라면 봉지를 열고 스프를 꺼냅니다.'),
    createElement('li', '면을 꺼내 끓는 물이 담긴 냄비에 넣습니다.'),
  ]

  list.prepend(...prependElements)

  // append()
  // 부모 요소의 마지막 자식 요소로 삽입
  // appendChild(element)
  // append(element, element, element, ...) // appendChild 대신
  // append(text, text, text, ...) // textContent 대신

  const appendElements = [
    createElement('li', '친구들을 불러 라면을 함께 먹는다.'),
    createElement('li', '친구들에게 설거지를 부탁한다.'),
  ]

  list.append(...appendElements)

  // before()
  const beforeElements = [
    createElement('li', 'before content 1'),
    createElement('li', 'before content 2'),
  ]

  const beforeTargetElement = list.children[4]
  beforeTargetElement.before(...beforeElements)

  // after()
  const afterElements = [
    createElement('li', 'after content A'),
    createElement('li', 'after content Z'),
  ]

  const afterTargetElement = list.children[6]
  afterTargetElement.after(...afterElements)

  // insertAdjacentElement()
  const elementInfo = {
    position: 'afterend',
    element: createElement('span', '인접한 요소로 삽입(insert adjacent element)')
  }

  const h1 = document.querySelector('h1')
  h1.insertAdjacentElement(elementInfo.position, elementInfo.element)

  // insertAdjacentHTML(position, htmlCode)
  const h2 = document.querySelector('h2')
  h2.insertAdjacentHTML('afterbegin', `
    <strong>🥘</strong>
  `)


  /**
   * DOM에 추가될 수 있는 요소 생성 함수
   * @param {string} tagName - HTML 요소 이름
   * @param {string} textContent - 요소에 포함될 내용
   * @returns {Element} 생성된 요소
   */
  function createElement(tagName, textContent) {
    const element = document.createElement(tagName)
    element.textContent = textContent
    return element
  }

})

// 여러 요소를 DOM에 추가할 때
// 렌더링 횟수가 증가하는 코드 예시
;(() => {
  
  // <li>면이 익으면 불을 끄고 그릇에 옮깁니다.</li>
  // <li>물을 냄비에 붓고 끓입니다 (약 500ml).</li>
  // <li>물이 끓으면 스프를 먼저 넣습니다.</li>
  // <li>취향에 따라 파, 계란, 치즈 등을 추가합니다.</li>
  // <li>호호 불며 맛있게 먹습니다.</li>

  const recipeList = [
    '면이 익으면 불을 끄고 그릇에 옮깁니다.',
    '물을 냄비에 붓고 끓입니다 (약 500ml)',
    '물이 끓으면 스프를 먼저 넣습니다.',
    '취향에 따라 파, 계란, 치즈 등을 추가합니다.',
    '호호 불며 맛있게 먹습니다.',
  ]

  const listElement = document.querySelector('.ramen-cooking-recipe')

  for (const recipe of recipeList) {
    const item = document.createElement('li')
    item.textContent = recipe
    listElement.appendChild(item)
  }

})

// 여러 요소를 DOM에 추가할 때
// innerHTML 사례
;(() => {
  
  const recipeList = [
    '면이 익으면 불을 끄고 그릇에 옮깁니다.',
    '물을 냄비에 붓고 끓입니다 (약 500ml)',
    '물이 끓으면 스프를 먼저 넣습니다.',
    '취향에 따라 파, 계란, 치즈 등을 추가합니다.',
    '호호 불며 맛있게 먹습니다.',
  ]

  // HTML 템플릿 문자열 생성
  const recipeHTMLTemplate = recipeList.map((content) => {
    return `<li>${content}</li>`
  }).join('')

  // console.log(recipeHTMLTemplate)

  const listElement = document.querySelector('.ramen-cooking-recipe')

  // innerHTML
  // before or after
  listElement.innerHTML = recipeHTMLTemplate + listElement.innerHTML

  // insertAdjacentHTML()
  // before or after or prepend or append
  // listElement.insertAdjacentHTML('afterbegin', recipeHTMLTemplate)

})

// 여러 요소를 DOM에 추가할 때
// DocumentFragment 활용 사례
;(() => {
  
  const listElement = document.querySelector('.ramen-cooking-recipe')

  // 문서 조각 객체 생성
  // 실제 DOM과 유사 (사용자가 보는 문서가 아닌, 다른 공간)
  const fragment = document.createDocumentFragment()
  console.dir(fragment)

  const recipeList = [
    '면이 익으면 불을 끄고 그릇에 옮깁니다.',
    '물을 냄비에 붓고 끓입니다 (약 500ml)',
    '물이 끓으면 스프를 먼저 넣습니다.',
    '취향에 따라 파, 계란, 치즈 등을 추가합니다.',
    '호호 불며 맛있게 먹습니다.',
  ]

  recipeList.forEach((recipe) => {
    const recipeItem = document.createElement('li')
    recipeItem.textContent = recipe
    fragment.appendChild(recipeItem)
  })

  listElement.append(...fragment.children)

})()
/* eslint-disable no-unused-vars */

;(() => {

  // <nav>의 모든 <a> 요소를 찾아보자
  // NodeList 객체는 배열과 유사해보이지만, 배열 객체는 아니다.
  const paragraphs = Array.from(document.querySelectorAll('.life-tips p'))
  // console.log(paragraphs.length)
  // 맨 마지막 문서의 단락 요소 찾기
  // console.log(paragraphs.item(paragraphs.length - 1))
  console.log(paragraphs.at(-2))

  // NodeList [a, a, a, a]
  // console.log(navLinks.item(0))
  // array[0], array.at(0)
  
  // 배열의 능력인 메서드를 모두 사용할 수 없다.
  // console.log(navLinks.findIndex)
  // console.log(navLinks.reduce)
  // console.log(navLinks.toReversed)
  // console.log(navLinks.filter)

  // 너 배열 타입이니?
  // Array.isArray(value) true or false
  console.log(Array.isArray(paragraphs)) // NodeList (false)
  
  // const array = Array.from(likeArrayObject)
  // 유사 배열 -> 배열 변경
  const navLinksArray = Array.from(paragraphs)
  console.log(Array.isArray(navLinksArray)) // Array (true)
  console.dir(navLinksArray)

  // 유사배열을 배열로 변경하면 배열의 모든 능력인 메서드를 사용할 수 있다!
  // console.log(navLinksArray.findIndex)
  // console.log(navLinksArray.reduce)
  // console.log(navLinksArray.toReversed)
  // console.log(navLinksArray.filter)

})

;(() => {
  // Node vs. ElementNode

  // HTML -> DOM의 모든 것은 Node입니다.
  // 여러 종류의 Node 중, 우리가 가장 많이 사용하는 노드는 요소 노드(ElementNode)입니다.

})()

;(() => {
  
  const lifeTips = document.querySelector('.life-tips')
  // console.log(lifeTips)

  // Document.querySelectorAll(selectors)
  // Element.querySelectorAll(selectors)
  const paragraphs = lifeTips.querySelectorAll('p')
  // console.log(paragraphs)

  // const firstParagraphElement = paragraphs.item(0)
  // console.log(firstParagraphElement)
  // const secondParagraphElement = paragraphs.item(1)
  // console.log(secondParagraphElement)
  // const lastParagraphElement = paragraphs.item(paragraphs.length - 1)
  // console.log(lastParagraphElement)

  const PRIMARY_KEY = 'color-primary'

  // Loop (반복, 순환)
  // - while
  let i = 0, l = paragraphs.length
  while (i < l) {
    const paragraphElement = paragraphs.item(i)
    paragraphElement.classList.add(PRIMARY_KEY)
    ++i
  }

  // - do...while
  
  // - for
  for (let i = 0, l = paragraphs.length; i < l; ++i) {
    const paragraphElement = paragraphs.item(i)
    // console.log(paragraphElement)
    if (paragraphElement.classList.contains(PRIMARY_KEY)) {
      paragraphElement.classList.remove(PRIMARY_KEY)
    }
  }

  // - for...of
  for (const paragraphElement of paragraphs) {
    // console.log(paragraphElement)
    if (!paragraphElement.classList.contains(PRIMARY_KEY)) {
      paragraphElement.classList.add(PRIMARY_KEY)
    }
  }

  // - NodeList.forEach((value, key, parent) => {...})
  paragraphs.forEach((p) => {
    if (p.classList.contains(PRIMARY_KEY)) {
      p.classList.remove(PRIMARY_KEY)
    }
  })

})

;(() => {
  const paras = document.querySelectorAll('.life-tips p')
  // console.log(paras)

  // console.log(paras[0] === paras.item(0))
  // console.log(paras[1] === paras.item(1))
  // console.log(paras[2] === paras.item(2))
})()

// HTMLCollection vs. NodeList
;(() => {
  console.group('DOM 업데이트 전')
  // HTMLCollection (Live)
  const paras = document.getElementsByTagName('p')
  console.log('HTMLCollection(라이브 콜렉션: 살아있는 집합) =', paras.length)

  const paraClasses = document.getElementsByClassName('para')
  console.log('HTMLCollection(라이브 콜렉션: 살아있는 집합) =',paraClasses.length)

  // NodeList
  const paragraphs = document.querySelectorAll('p')
  console.log('NodeList(스태틱 콜렉션: 고정된 집합)', paragraphs.length)
  console.groupEnd()

  // Update DOM
  document.querySelector('.life-tips').innerHTML += '<p class="para">씻지 않은 채소는 그대로 보관하시는 것이 좋습니다.</p>'

  console.group('DOM 업데이트 후')
  console.log('HTMLCollection(라이브 콜렉션: 살아있는 집합) =', paras.length)
  console.log('HTMLCollection(라이브 콜렉션: 살아있는 집합) =',paraClasses.length)
  console.log('NodeList(스태틱 콜렉션: 고정된 집합)', paragraphs.length)
  console.groupEnd()
})

// 실습
;(() => {
  const starWars = document.querySelector('#star-wars')
  // console.log(starWars)

  // 1. 좋은 사람(Good Guy)을 모두 선택하세요.
  const goodGuyList = starWars.querySelectorAll('[data-type="good-guy"]')
  // console.log(goodGuyList)

  // 2. 좋은 사람(Good Guy) 모두에게 `excellent` 클래스 이름을 추가하세요.
  goodGuyList.forEach((guy) => {
    guy.classList.add('excellent')
  })

  // for (const guy of goodGuyList) {
  //   guy.classList.add('excellent')
  // }

  // 3. 빌런(Villain)을 모두 선택하세요.
  const villainList = starWars.querySelectorAll('[data-type="villain"]')
  // console.log(villainList)

  // 4. 빌런 모두에게 `naughty` 클래스 이름을 추가하세요.
  for (let i = 0, l = villainList.length; i < l; i += 1) {
    const villain = villainList[i]
    villain.classList.add('naughty')
  }
 
  // 5. 모든 캐릭터(Character)를 선택하세요.
  const allCharacters = starWars.querySelectorAll('.character')
  console.log(allCharacters)

  // 6. 모든 캐릭터에 `star-wars` 클래스 이름을 추가하세요.
  allCharacters.forEach((c) => {
    c.classList.add('star-wars')
  })

})()

// 1. 좋은 사람(Good Guy)을 모두 선택
const goodGuys = document.querySelectorAll('[data-type="good-guy"]')

// 2. 좋은 사람 모두에게 'excellent' 클래스 추가
goodGuys.forEach(el => el.classList.add('excellent'))

// 3. 빌런(Villain)을 모두 선택
const villains = document.querySelectorAll('[data-type="villain"]')

// 4. 빌런 모두에게 'naughty' 클래스 추가
villains.forEach(el => el.classList.add('naughty'))

// 5. 모든 캐릭터(Character)를 선택
const allCharacters = document.querySelectorAll('.character')

// 6. 모든 캐릭터에 'star-wars' 클래스 추가
allCharacters.forEach(el => el.classList.add('star-wars'))


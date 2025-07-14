const exorcists = document.getElementById('exorcist-characters')

const choi = exorcists.querySelector('.master-choi')
// console.dir(choi.classList)
const villain = exorcists.querySelector('[data-type="villain"]')


// Element.classList -> DOMTokenList { add, remove, contains, item, replace, toggle }

// let firstClassName = choi.classList.item(0)
// let lastClassName = choi.classList.item(1)
// console.log('firstClassName =', firstClassName)
// console.log('lastClassName =', lastClassName)

// 토글 전
console.log('1. choi.classList.value의 아이템 갯수 =', choi.classList.length)

// 클래스 이름 토글
choi.classList.toggle('charactor-is-active')

// 토글 후
console.log('2. choi.classList.value의 아이템 갯수 =', choi.classList.length)

// let activeClassName = 'charactor-is-active'
// if (!choi.classList.contains(activeClassName)) {
//   choi.classList.add(activeClassName)
// } else {
//   choi.classList.remove(activeClassName)
// }

// 오늘날 주로 사용하는 방법(NEW)
{
  // choi.classList.add('active')
  // console.dir(choi.classList.value)
  // choi.classList.remove('master-choi')
}

{
  // villain-ghost 항목 요소를 찾아서 클래스 이름을 여럿 추가한 뒤,
  // 다시 클래스 이름을 여럿 제거해봅니다.
  villain.classList.add('alpha', 'beta')
  console.log(villain.className)
  
  villain.classList.remove('beta', 'character')
  console.log(villain.className)
  
}

// 이전 시대의 방법 (OLD)
{
  // 문서 객체 속성 읽기
  // console.log(choi.className)
  // x = x + 15
  // x += 15

  // 문서 객체 속성 수정
  // choi.className = choi.className + ' active'
  // choi.className += ' active'


  // let x = 10

  // console.log(x) // 10

  // x = 20
  // console.log(x) // 20

  // x 값에다가 15만큼 더하고 싶다.
  // x = x + 15

  // console.log(x) // 25
}
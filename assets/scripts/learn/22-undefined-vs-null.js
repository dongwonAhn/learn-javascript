// --------------------------------------------------------------------------
// 📌 undefined vs. null
// --------------------------------------------------------------------------

let weapon
console.log('처음 weapon 값은?', weapon) // undefined

// weapon에 값을 할당한 후 출력
weapon = '롱소드'
console.log('변경 후 weapon 값은?', weapon) // '롱소드'

// 새로운 함수 선언
function getArmor() {
  // 일부러 아무것도 반환하지 않음
}
console.log('getArmor 함수의 반환 값은?', getArmor()) // undefined

// --------------------------------------------------------------------------

const knight = {
  name: '아서',
  mount: null,
}

console.log('처음 knight의 mount는?', knight.mount) // null

// knight가 말을 얻었다!
knight.mount = '브라우니'
console.log('말을 얻은 후 knight의 mount는?', knight.mount) // '브라우니'
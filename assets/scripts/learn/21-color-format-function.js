// --------------------------------------------------------------------------
// ✅ 컬러 포멧 변경 함수 작성
// --------------------------------------------------------------------------
// - [ ] setHexColor(red, green, value) : #hexcode 반환
// - [ ] setRgbColor(red, green, value) : rgb() 문자열 반환
// --------------------------------------------------------------------------

// 예) setHexColor(255, 255, 255) // 결과값: '#ffffff'

// 예) setRgbColor('ff', 'ff', 'ff') // 결과값: 'rgb(255, 255, 255)'


// 10진수 -> 16진수 함수
function toHexadecimal(decimal) {
  return decimal.toString(16)
}


// 16진수 -> 10진수 함수
function toDecimal(hexadecimal) {
  return parseInt(hexadecimal, 16)
}

// console.log(toHexadecimal(255))
// console.log(toDecimal('ff'))

// --------------------------------------------------------------------------

// 함수 작성 (기능 구현)
function setHexColor(red, green, blue) {
  const redValue = toHexadecimal(red)
  const greenValue = toHexadecimal(green)
  const blueValue = toHexadecimal(blue)
  const colorValue = '#' + redValue + greenValue + blueValue
  return colorValue
}

// 테스트 코드
console.log(setHexColor(255, 255, 255) === '#ffffff')

// --------------------------------------------------------------------------

// 함수 작성 (기능 구현)
function setRgbColor(red, green, blue) {
  const redValue = toDecimal(red)
  const greenValue = toDecimal(green)
  const blueValue = toDecimal(blue)
  const colorValue = 'rgb(' + redValue + ', ' + greenValue + ', '  + blueValue + ')'
  return colorValue
}

// 테스트 코드
console.log(setRgbColor('ff', 'ff', 'ff') === 'rgb(255, 255, 255)')
console.log(setRgbColor('00', 'af', 'ed'))
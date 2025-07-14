/* eslint-disable no-unused-vars */

// --------------------------------------------------------------------------
// 📌 유틸리티 함수 만들기
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// getStyle(element, propertyName, ?pseudoElement): propertyValue
function getStyle(element, propertyName, pseudoElement) {
  const elementStyles = getComputedStyle(element, pseudoElement)
  const propertyValue = elementStyles.getPropertyValue(propertyName)
  return propertyValue
}

// --------------------------------------------------------------------------
// setStyle(element, propertyName, propertyValue): element
function setStyle(element, propertyName, propertyValue) {
  // 요소에 스타일 적용(쓰기)
  element.style.setProperty(propertyName, propertyValue)
  return element
}

// --------------------------------------------------------------------------
// css(element, propertyName, ?propertyValue, ?pseudoElement): element
function css(element, propertyName, propertyValue, pseudoElement) {
  // [스타일 쓰기] 속성 값이 전달되었을 때
  if (propertyValue) {
    // 스타일 쓰기
    const styledElement = setStyle(element, propertyName, propertyValue)
    return styledElement
  } 
  // [스타일 읽기] 속성 값이 전달되지 않았을 때
  else {
    // 스타일 읽기
    const propertyValue = getStyle(element, propertyName, pseudoElement)
    return propertyValue
  }
}
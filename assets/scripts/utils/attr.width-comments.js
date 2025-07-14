/* eslint-disable no-unused-vars */

// --------------------------------------------------------------------------
// 📌 attr 유틸리티 함수 작성 및 활용
// --------------------------------------------------------------------------

// getAttr(element, attributeName)

// setAttr(element, attributeName, attributeValue)

// 유틸리티 함수 설계
// attr(element, attributeName, ?attributeValue): element | string
function attr(element, attributeName, attributeValue) {
  
  // 설정 값이 있는 경우
  // 0, '' 고려해서 undefined가 아닌 경우만 처리
  // 속성 쓰기
  if (attributeValue !== undefined && attributeValue !== null) {
    element.setAttribute(attributeName, attributeValue)
    return element
  } 
  // 설정 값이 없는 경우
  // 속성 읽기
  else {
    const attributeValue = element.getAttribute(attributeName)
    // 반환 값: attributeValue
    return attributeValue
  } 
}

// 속성 쓰기 사용법
// const changedElement = attr(element, attributeName, attributeValue)

// 속성 읽기 사용법
// const attributeValue = attr(element, attributeName)
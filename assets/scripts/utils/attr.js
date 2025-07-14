/* eslint-disable no-unused-vars */

// --------------------------------------------------------------------------
// 📌 attr 유틸리티 함수 작성 및 활용
// --------------------------------------------------------------------------

// 속성 읽기 기능(함수)
const getAttr = (element, attributeName) => 
  element.getAttribute(attributeName)

// 속성 쓰기 기능(함수)
const setAttr = (element, attributeName, attributeValue) => {
  element.setAttribute(attributeName, attributeValue)
  return element
}

// 함수 내부에 사용된 기능을 분리(추출)
function attr(element, attributeName, attributeValue) {  
  if (attributeValue) {
    return setAttr(element, attributeName, attributeValue)
  } else {
    return getAttr(element, attributeName)
  }
}
/* eslint-disable no-unused-vars, no-undef */
{
  const tester = document.querySelector('h1')
  
  // 유틸리티 함수를 사용해서 요소 스타일 읽기
  const contentValue = getStyle(tester, 'content', '::before')
  // console.log(contentValue)
  
  // 유틸리티 함수를 사용해서 요소 스타일 쓰기
  const resultElement = setStyle(tester, 'color', '#910038')
  // console.log(tester === resultElement) // true

  // 유틸리티 함수 하나를 사용해 요소 스타일 쓰기/읽기 (편의성 향상)
  // 1. 요소에 스타일 쓰기
  const styledElement = css(tester, 'letter-spacing', '10px')
  // console.log(styledElement)

  // 2. 요소의 스타일 읽기
  const styledFontWeightValue = css(styledElement, 'letter-spacing')
  // console.log(styledFontWeightValue)

  // css(element, propertyName, ?propertyValue, ?pseudoElement): element | propertyValue
  const result = css(tester, 'content', undefined, '::before')
  console.log(result)

  // const result = css({
  //   element: tester,
  //   pseudoElement: '::before',
  //   propertyName: 'content',
  // })
}
/* eslint-disable no-unused-vars */

function throttle(callback, delay = 400) {
  let timeout = null

  // 반환 함수
  return function eventListener(...args) {
    // 발생 빈도 조정
    if (!timeout) {
      timeout = setTimeout(() => {
        // 이벤트 리스너의 매개변수 집합(배열) 전개
        callback(...args)
        // 발생 빈도 재조정을 위한 초기화
        timeout = null
      }, delay)
    }
  }
}
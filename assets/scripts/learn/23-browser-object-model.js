// --------------------------------------------------------------------------
// 📌 BOM (브라우저 객체 모델)
// --------------------------------------------------------------------------

// 브라우저 윈도우 객체
// console.log(window) // Window {}

// 모니터 스크린 객체
// console.log(window.screen) // Screen {}
// console.log(screen) // Screen {}

// 로케이션 객체
// console.log(window.location) // Location {}
// console.log(location) // Location {}

// 히스토리 객체
// console.log(window.history) // History {}
// console.log(history)

// 도큐멘트 객체
// console.log(window.document) // Document {}
// console.log(document)

// --------------------------------------------------------------------------
// 📌 DOM (문서 객체 모델)
// --------------------------------------------------------------------------

console.dir(document) // 브라우저 객체 중 도큐멘트 객체
console.log(document.compatMode) // 웹 표준 호환 모드인지 확인
console.log(document.activeElement) // 초점(focus)이 주어진 엘리먼트(요소)
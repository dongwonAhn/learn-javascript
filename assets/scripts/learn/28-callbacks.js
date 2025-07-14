// 문서에 있는 버튼 요소에 접근(찾기)
// 전역 변수에 참조(왜? 객체 타입이니까)
const button = document.querySelector("button.clickable");

const handleBodyToggleClass = () => {
  console.log("body");
  document.body.classList.toggle("is-active");
};

const handleButtonToggleClass = () => {
  console.log("button");
  button.classList.toggle("is-active");
};

// 동기 방식은 코드 실행 완료될 때까지 다음 코드를 차단(블로킹)
// 비동기 방식은 바로 실행되지 않고(다음 코드를 차단하지 않고) 나중에 코드가 호출(콜백)

// 버튼 요소에 이벤트 리스너(함수) 추가
// 콜백 = 다른 함수에 인수로 전달될 함수 (나중에 실행되도록)
// 이벤트 = 언제 발생할 지 알 수 없음 (비동기 실행)
button.addEventListener("click", handleBodyToggleClass);

// addEventListener()를 사용해 리스너를 추가하는 것은 x N회 가능
button.addEventListener("click", handleButtonToggleClass);

// 동기(sync) 실행
handleBodyToggleClass(); // 1
handleBodyToggleClass(); // 2
handleBodyToggleClass(); // 3
handleBodyToggleClass(); // 4
handleBodyToggleClass(); // 5

// 레거시 이벤트 vs. 모던 이벤트 모델
// 변수에는 여러 값을 저장할 수 있다? 아니다 변수는 단 하나의 값만 저장할 수 있다?

// button.onclick = function() {
//   button.classList.toggle('is-active')
// }

// console.log(button.onclick)

// button.onclick = function() {
//   document.body.classList.toggle('is-active')
// }

// console.log(button.onclick)

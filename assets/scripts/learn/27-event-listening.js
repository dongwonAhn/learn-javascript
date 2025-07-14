const clickable_button = document.querySelector(".clickable");
const body = document.body;

clickable_button.addEventListener("click", (e) => {
  // addEventListener()에 전달된 함수(값) 즉, 이벤트 리스너는
  // event 객체를 매개변수로 전달 받는다.
  // Event { x, y, target, type, pointerType, ... }
  console.log("이벤트 객체 =", e);

  // body 그리고 clickable_button 요소 모두 is-active 클래스 토글(on <-> off)
  body.classList.toggle("is-active");
  clickable_button.classList.toggle("is-active");
});

// clickable_button.addEventListener("click", () => {
//   // 조건 확인 ('is-active' 클래스 이름을 가지는가?)
//   if (body.classList.contains("is-active")) {
//     // 클래스 이름 제거 -----------------------------------
//     // body 요소에 is-active 클래스 이름 제거
//     body.classList.remove("is-active");
//     // .clickable_button 요소에 is-active 클래스 이름 제거
//     clickable_button.classList.remove("is-active");
//   } else {
//     // 클래스 이름 추가 -----------------------------------
//     // body 요소에 is-active 클래스 이름 추가
//     body.classList.add("is-active");
//     // .clickable_button 요소에 is-active 클래스 이름 추가
//     clickable_button.classList.add("is-active");
//   }
// });

// console.log(clickable_button)

// clickable_button.addEventListener(
//   /* event type (string)*/
//   'click',
//   /* event listener (function) */
//   // function() {
//   //   console.log('clicked clickable button')
//   // }
//   () => {
//     console.log('clicked clickable button')
//   }
// )

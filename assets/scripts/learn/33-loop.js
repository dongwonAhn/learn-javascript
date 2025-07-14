// --------------------------------------------------------------------------
// 📌 루프(Loop)
// --------------------------------------------------------------------------

// draw()
// draw()
// draw()
// draw()
// draw()

// const numbers = [100, 99, 98, 97]
// console.log(numbers)

// --------------------------------------------------------------------------
// if 문 vs. while 문

;(() => {
  const draw = () => {
    console.count('도화지에 그림을 그린 횟수')
    
  }

  let wantToDraw = true

  // 조건문
  // 조건이 참이면 블록 내부의 코드 한 번 수행
  if (wantToDraw) {
    console.log('if문')
    draw()
  }

  // 루프(반복)문 
  // 조건이 참이면 블록 내부의 코드를 조건이 거짓이 될 때까지 반복 수행
  // 특정 상황(조건) 설정
  let i = 10

  while(wantToDraw) {
    console.log('while문')
    draw()

    // 특정 상황이 일치되는 경우
    if(i-- <= 0) { // 선감소(--i): i = 9  / 후감소(i--) i = 10
      // 조건을 참에서 거짓으로 변경
      wantToDraw = false
      console.log('i =', i, 'wantToDraw =', wantToDraw)
    } else {
      // i = i - 1
      // i -= 1 // 10 - 1 -> 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
      
      // 후감소
      // i--
      
      // 선감소
      // --i
      
      console.log('i =', i)
    }
  }
})

// --------------------------------------------------------------------------
// 사용자 입력 검증 (while)
// "1부터 10까지 숫자를 입력하세요"

// window.prompt('message')
// Number.parseInt(value, ?radix)
// Number.isNaN(value)

;(() =>{
  // let userInput = prompt("1부터 10까지 숫자를 입력하세요")
  // userInput = Number.parseInt(userInput, 10)
  let userInput = parseInt(prompt("1부터 10까지 숫자를 입력하세요"), 10)

  while (Number.isNaN(userInput) || userInput < 1 || userInput > 10) {
    console.error('입력 값이 1부터 10까지 숫자여야 합니다.')
    userInput = parseInt(prompt("1부터 10까지 숫자를 입력하세요"), 10)
  }

  console.log('사용자가 입력한 값은 ' + userInput + '입니다.')
})

// --------------------------------------------------------------------------
// 흐름 제어 (continue, break)

;(() => {
  
  let drawCount = 20
  let i = 0

  const draw = (n) => {
    console.log('도화지에 그림을 그린 횟수 = ' + n)
  }

  // continue
  // while(i++ < drawCount /* 1 ~ 10 -> continue -> 16 ~ 19 */) {
  //   // i += 1
  //   // ++i
  //   // i++

  //   // i = 10
  //   if (i > 10 && i <= 15) {
  //     continue
  //   }

  //   draw(i)
  // }

  // break
  while(i++ < drawCount /* 0 < 20 */) {
    // i = 1, 2, 3, 4, 5

    if (i === 5) { // i = 5
      break // 반복문 종료
    }

    draw(i) // i = 1, 2, 3, 4
  }

  console.log('마지막 i 값 =', i) // i = 5

})


;(() => {
  // let userInput = Number.parseInt(prompt('1부터 10까지 숫자를 입력하세요.'), 10);

  // while (Number.isNaN(userInput) || userInput < 1 || userInput > 10) {
  //   console.error('입력 값이 1부터 10 사이의 숫자여야 합니다.');
  //   userInput = Number.parseInt(prompt('1부터 10까지 숫자를 입력하세요.'), 10);
  // }

  // console.log('userInput =', userInput)


  // 선 증가, 후 증가는 왜 쓰는 지, 어떨 때 쓰는지 궁금합니다! 사실 아직 잘 이해가 안돼서요..ㅠ
  
  // let i = 0

  // step 1.
  // while(i < 10) {
  //   console.log(i)
  //   i = i + 1
  // }

  // step 2.
  // while(i < 10) {
  //   console.log(i)
  //   // i = i + 1
  //   // i += 1
  //   i++
  // }

  // step 3.
  // while(i++ < 10) {
  //   console.log(i)
  // }
  
  // step 4.
  // while(i++ < 10) console.log(i)

})

// --------------------------------------------------------------------------
// 반복문 (do ... while)
// while vs. do ... while

;(() => {
  
  let condition = false

  // do...while 문
  // 조건이 거짓이어도 1번은 반드시 실행
  do {
    console.log('do...while')
  } while(condition)


  // while 문
  // 조건이 거짓이면 1번도 실행 안함
  while(condition) {
    console.log('while')
  }

})

// --------------------------------------------------------------------------
// 사용자 입력 검증 (while)
// "1부터 10까지 숫자를 입력하세요"

// do...while 문 사용 예시
;(() => {
  let userInput

  do {
    userInput = parseInt(prompt("1부터 10까지 숫자를 입력하세요"), 10)
    if (Number.isNaN(userInput) || userInput < 1 || userInput > 10) 
      console.error('입력 값이 1부터 10까지 숫자여야 합니다.')
  } while (Number.isNaN(userInput) || userInput < 1 || userInput > 10)

  console.log('사용자가 입력한 값은 ' + userInput + '입니다.')
})

// while 문 사용 예시
;(() => {
  let userInput = parseInt(prompt("1부터 10까지 숫자를 입력하세요"), 10)

  while (Number.isNaN(userInput) || userInput < 1 || userInput > 10) {
    console.error('입력 값이 1부터 10까지 숫자여야 합니다.')
    userInput = parseInt(prompt("1부터 10까지 숫자를 입력하세요"), 10)
  }
  
  console.log('사용자가 입력한 값은 ' + userInput + '입니다.')
})

// --------------------------------------------------------------------------
// 하나의 파일 안에서 다른 코드와 충돌 없이 일종의 캡슐화(모듈) 처리
// 즉시 실행되는 함수 표현식(IIFE) 패턴

// 함수는 값
// JS에서 (함수값)
// ;(() => {
//   console.log('나를 보세요')
// })()

// --------------------------------------------------------------------------
// i = i + 1 vs. i++
;(() => {
  let i = 0

  i = i + 1

  i++

  ++i

  console.log(i)
})

// --------------------------------------------------------------------------
// for 문
// while 문 vs. for 문


// while 문 예시
;(() => {

  let i = 0

  while(i < 10) {
    console.count('while 문')
    ++i
  }

})

// for 문 예시
;(() => {

  for(let i = 0; i < 10; i = i + 1) {
    console.count('for 문')
  }

})

;(() => {

  let i = 0

  for(; i < 10;) {
    console.count('for 문') 
    ++i
  }
  
})

;(() => {
  // let i = 0

  // for(변수선언값할당; 변수가유효한지비교; 변수변경) {
  for( let i = 0; i < 10; ++i ) {
    console.count('for 문', i) 
    // ++i
  }
  
})()

;(() => {
  
  const numbers = [11, 22, 33, 44, 55, 66]

  // numbers를 순환(루프)하되, 33인 값(인덱스) 순서에서 반복문 멈춰라
  for (let i = 0; i < numbers.length; i = i + 1) {
    // const number = numbers.at(i)
    const number = numbers[i]

    if(number === 33) {
      // 반복문 내부에서 break를 만나면 반복문이 바로 중단됨
      break
    }

    console.log(number)
  }

})

;(() => {
  
  const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99]

  for (let i = 0, l = numbers.length; i < l; i = i + 1) {
    const number = numbers[i]
    console.log(number)
  }

  // let i = 0, 
  //     l = numbers.length

  // for (; i < l;) {
  //   const number = numbers[i]
  //   console.log(number)
  //   i = i + 1
  // }

})

;(() => {
  const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99]

  for (let i = 0, number; (number = numbers[i]); i = i + 1) {
    console.log(number)
  }

  // let i = 0, number // undefined

  // for (; (number = numbers[i]);) {
  //   console.log(number)
  //   i = i + 1
  // }

})()

;(() => {
  const fruitBasket = ['체리망고', '토마토', '스트로베리', '워터멜론', '체리']

  // for문을 사용해 과일바구니 내부의 과일 이름을 콘솔 패널에 출력
  for (let i = 0, l = fruitBasket.length; i < l; i++) {
    // console.log(fruitBasket[i])
  }

  const students = [
    { 이름: '홍민영' },
    { 이름: '윤정화' },
    { 이름: '허시온' },
    { 이름: '조선현' },
    { 이름: '성정현' },
    { 이름: '조장원' },
    { 이름: '차지현' },
    { 이름: '김동규' },
    { 이름: '이성은' },
    { 이름: '고우현' },
  ]

  // for문을 사용해 수강생의 이름을 콘솔 패널에 출력
  console.time('정순환')
  for (let i = 0; i < students.length; i++) {
    const student = students[i]
    console.log(student.이름)
  }
  console.timeEnd('정순환')
  
  // 역순 순환
  console.time('역순환')
  for (let i = students.length - 1; i >= 0; i = i - 1) {  
    const student = students[i]
    console.log(student.이름)
  }
  console.timeEnd('역순환')

})()

;(() => {
  const students = [
    { 이름: '홍민영' },
    { 이름: '윤정화' },
    { 이름: '허시온' },
    { 이름: '조선현' },
    { 이름: '성정현' },
    { 이름: '조장원' },
    { 이름: '차지현' },
    { 이름: '김동규' },
    { 이름: '이성은' },
    { 이름: '고우현' },
  ]

  // for...of 문
  // break ✅
  // continue ✅
  // 역순환 가능 ✅ (.toReversed() 메서드 활용)
  for (const student of students.toReversed()) {
    // if(
    //   student.이름 === '성정현' || 
    //   student.이름 === '김동규'
    // ) continue

    // if (student.이름 === '이성은') break

    console.log(student.이름)

  }
  console.log(students)

})

// 아래 코드를 넣었는데 문법 오류라고 떠요 
// Uncaught SyntaxError: Unexpected token ';'
// 아무리 봐도 모르겠어요~

;(() => {
  
  const webTech = {
    html: 'hyper text markup language',
    css: 'cascading style sheet',
    javascript: 'programming language'
  }
  
  // 객체 전용 순환
  // for ... in 문
  for ( const key in webTech ) {
    const value = webTech[key]
    console.table({
      key: key,
      value: value
    })
  }


  // for 문 (객체에서 활용하지 않음)
  // for ... of 문 (객체에서 활용하지 않음)


})

// 실습
;(() => {
  // 컴퓨터 프로그래밍의 기본 구조 중 하나인 루프에 숙달하기 위한 연습을 진행하세요.

  // 1. for 문을 사용해 `1`부터 `100`까지의 숫자 중, 짝수만 출력
  //   for (let i = 1, l = 100; i<=l; i++) {
  //     if(i % 2 === 0) console.log(i)
  //   }
  //   for (let i = 0, l = 100; i<=l; i += 2) {
  //     if(i > 0) console.log(i)
  //   }

  // 2. while 문을 사용해 숫자 `10`부터 `1`까지 역순으로 출력
  // {
  //   let i = 10

  //   while(i > 0) {
  //     console.log(i) // 10, 
  //     i = i - 1 // 9
  //   }
  // }

  // 3. for … of 문을 사용해 다음 배열의 과일 출력
  const fruits = ['사과', '바나나', '귤', '복숭아']

  // for (const fruit of fruits) {
  //   console.log(fruit)
  // }

  // 4. do … while 문을 사용해 입력된 비밀번호(`'3001'`) 매칭 검토 후 결과 출력
  // const attempts = ['0124', '8291', '3001', '9073']
  // let i = 0, input

  // do {
  //   input = attempts[i] // '0124', '8291', '3001', ...

  //   console.log('사용자 입력 시도 = '+ (i + 1) +' / 입력 값 =', input)

  //   if (input === '3001') {
  //     console.log('사용자 입력 값이 비밀번호와 일치합니다.')
  //     break
  //   }

  //   i = i + 1 // 1, 2
  // } while(i < attempts.length)

  // 5. for … in 문을 사용해 객체의 key, value 출력
  const student = {
    name: '선호',
    grade: 'A',
    age: 22,
  }

  // for (const key in student) {
  //   const value = student[key]
  //   console.log(key, value)
  // }

  // 6. `1`부터 `20`까지 반복
  //     1. `5`부터 `10`까지는 건너띄고 나머지 출력
  //     2. `17`이 되면 반복 종료
  // for (let i = 1; i<=20; i++) {
  //   if (i >= 5 && i <= 10) continue
  //   if (i === 17) break
  //   console.log(i)
  // }

})()
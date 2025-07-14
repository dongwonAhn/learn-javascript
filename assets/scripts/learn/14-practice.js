// --------------------------------------------------------------------------
// 📌 객체 만들기
// --------------------------------------------------------------------------

// 예) 사람(person) 또는 도서(book)

let book
console.log(book)

// 1. 빈 객체를 정의합니다.
book = {}
console.log(book)

// 2. 점 표기법으로 접근할 수 있는 객체 속성을 추가하고, 속성 값을 읽어보세요.
book.title = '첫 여름, 완주'
console.log(book)

// 3. 대괄호 표기법으로만 접근 가능한 객체 속성도 추가하고, 속성 값을 읽어보세요.
book['page count'] = 224
console.log(book)

// 4. 점 표기법을 사용해 객체의 속성 값을 수정하거나, 추가해봅니다.
book.title = '자매일기'
console.log(book)

// 5. 대괄호 표기법을 사용해 객체의 속성 값을 수정하거나, 추가해봅니다.
book['page count'] = 180
console.log(book)

// 6. 객체의 속성 타입을 함수로 설정해 메서드를 추가하고, 이 메서드를 호출해보세요.
book.getAuthors = function() {
  return '박소영, 박수영'
}
console.log(book.getAuthors)
console.log(book.getAuthors())

// 7. 객체의 메서드에 매개변수를 추가하고, 이 메서드를 호출해봅니다.
book.getPrice = function(unit) {
  return '16,200' + unit
}

console.log(book)
console.log(book.getPrice('원'))

// 8. 객체의 속성 중 하나를 선택해, 삭제해보세요.
console.log(book)
delete book['page count']
console.log(book)
book.pageCount = 180
console.log(book)
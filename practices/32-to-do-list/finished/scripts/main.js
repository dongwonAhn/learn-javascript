;(() => {

  /* global DOMPurify */

  // 문서에서 폼 요소 찾기
  const todoListForm = document.querySelector('.todolist')
  const todoList = todoListForm.querySelector('.todolist__tasks')
  
  // 폼 요소에 submit 이벤트 리스너 추가
  todoListForm.addEventListener('submit', (e) => {
    // 브라우저 기본 작동 방지
    e.preventDefault()

    // 이벤트 연결 대상 찾기
    const form = e.currentTarget
    
    // 새로운 할 일 콘텐츠(내용) 읽기
    // const input = form.querySelector('#new-task')
    // const [input] = form.elements
    const input = form['new-task']
    const taskContent = input.value.trim()
    
    // 사용자가 입력한 내용이 아무 것도 없으면
    // 아무 일도 안해야 함
    if(!taskContent) return

    // 새 할 일 추가
    // 새로운 할 일 <li> 요소 생성
    const newTask = createTask(taskContent) 

    // DOM 업데이트 (화면 변경)
    // 생성된 할 일 요소를 할 일 목록의 마지막 자식 요소로 추가
    // todoList.appendChild(newTask)
    todoList.append(newTask)

    // 폼 입력 필드 초기화
    form.reset()
    
  })

  // 이벤트 위임 방식을 사용해
  // 동적 생성된 할 일 요소의 삭제 기능이 처리되도록 구현
  todoList.addEventListener('click', ({ currentTarget: list, target }) => {
    const removeButton = target.closest('[aria-label="할 일 삭제"]')
    
    if (!removeButton) return
    
    // 삭제 기능 작동 (할 일 요소 제거)
    const willRemoveTaskElement = removeButton.closest('.task')
    // willRemoveTaskElement.parentElement.removeChild(willRemoveTaskElement)
    willRemoveTaskElement.remove()

    // 할 일 목록 내부에 아무런 자식 요소가 없다면?
    // <ul> 요소 내부에 공백이 없도록 구성
    // 사용자에게 새 할 일 추가에 관한 안내 사항 표시
    if(list.children.length === 0) list.innerHTML = ''
  })  

  // 할 일 제거 버튼 찾기
  // const removeButtons = todoList.querySelectorAll('button')
  
  // 찾은 제거 버튼(들) 순환
  // removeButtons.forEach((button) => {
  //   // 할 일 제거 버튼 click 이벤트 리스너 추가 (개별)
  //   button.addEventListener('click', (e) => {
  //     const taskElement = e.currentTarget.closest('.task')
  //     // 제거 방법 1
  //     // taskElement.parentElement.removeChild(taskElement)
  //     // 제거 방법 2
  //     taskElement.remove()
  //   })
  // })

  // 새로운 할 일 생성 함수
  function createTask(content) {
    // 생성할 할 일 요소
    const taskElement = document.createElement('li')
    taskElement.classList.add('task')

    // 생성될 할 일 요소의 고유 ID 생성
    const uniqueId = generateUniqueId(10)

    // 생성할 할 일 요소의 템플릿 구성 후,
    // innerHTML 속성으로 요소에 HTML 생성
    taskElement.innerHTML = DOMPurify.sanitize(/* html */`
      <input type="checkbox" id="${uniqueId}" />
      <label for="${uniqueId}">
        <span class="task__checkmark" aria-hidden="true">
          <svg viewBox="0 0 20 15">
            <path d="M0 8l2-2 5 5L18 0l2 2L7 15z" fill-rule="nonzero" />
          </svg>
        </span>
        ${content}
      </label>
      <button type="button" class="task__delete-button" aria-label="할 일 삭제" title="할 일 삭제">
        <svg viewBox="0 0 20 20">
          <path
            d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
          />
        </svg>
      </button>
    `)

    // 생성된 새 할 일 요소 반환
    return taskElement
  }

  // 고유 ID 생성 함수
  function generateUniqueId(length = 5) {
    return Math.random().toString(36).substring(2, length + 2)
  }

})()
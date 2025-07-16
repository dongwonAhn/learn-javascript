/* global axios */

// --------------------------------------------------------------------------
// 📌 파일(이미지) 업로드
// --------------------------------------------------------------------------

// 멀티 이미지 업로드 기능 구현
;(() => {
  
  const uploadForm = document.querySelector('[data-id="upload-form"]')

  uploadForm.addEventListener('submit', (e) => {
    // 브라우저 기본 작동 방지
    e.preventDefault()

    // 이벤트가 연결된 대상: 폼 요소
    const form = e.currentTarget
    // console.log(form)
    
    // 폼 요소의 데이터를 가져오기 위해 폼 데이터 객체 생성
    const formData = new FormData()
    // console.log(formData)
    
    // 폼 컨트롤 요소 집합(elements)
    const [fileInput] = form.elements
    
    // 파일 인풋의 업로드할 파일들 루프(loop)
    for (const file of fileInput.files) {
      const [key] = file.name.split('.')
      // console.log(key)
      formData.append(key, file)
    }

    // formData -> JavaScript Object
    console.log(Object.fromEntries(formData))

  })

})()
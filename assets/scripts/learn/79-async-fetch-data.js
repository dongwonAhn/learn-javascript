// --------------------------------------------------------------------------
// 📌 쇼핑몰 데이터 페칭
// --------------------------------------------------------------------------

;(() => {
  
  let data = []
  const form = document.querySelector('form')
  const loadingElement = document.querySelector('[role="status"]')
  const errorLogElement = document.querySelector('[role="alert"]')
  const products = document.querySelector('.products')
  const productsCount = document.querySelector('.products-count')

  const ENDPOINT = 'https://dummyjson.com/c/1aa7-dc00-4ecf-af7c'

  // 비동기 통신으로 쇼핑몰 데이터 요청
  fetchShoppingData()

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const form = e.currentTarget
    const [ searchInput, categorySelect ] = form.elements
    const search = searchInput.value.trim()
    const category = categorySelect.value

    const filteredData = searchData(search, category)
    renderView(filteredData)

    form.reset()
  })
  
  // fetch() 함수를 사용해 비동기 통신으로 데이터 요청
  function fetchShoppingData() {
    // 로딩 상태 표시
    initLoading()

    // API 서버에 비동기 요청
    fetch(ENDPOINT)
      // 비동기 요청/응답 처리
      .then(handleResponse)
      .then((responseData) => {
        data = responseData
      })
      // 데이터 정리 또는 필터링(검색)
      .then(searchData)
      // DOM 업데이트
      .then(renderView)
      // 오류 처리
      .catch(handleError)
      // 최종 처리 (예: 로딩 종료 등)
      .finally(resetLoading)
  }

  // 로딩 시작
  function initLoading() {
    loadingElement.hidden = false
    loadingElement.textContent = '데이터 로딩이 시작되었습니다.'
  }

  // 응답 처리 기능
  function handleResponse(response) {
    // 요청 응답이 실패한 경우
    if(!response.ok) {
      // 오류 객체 생성 후 전달(던지기!)
      throw new Error(`${response.status} 해당 리소스를 찾을 수 없습니다. 😳`)
    }

    // 요청 응답이 성공한 경우
    return response.json()
  }

  // 상품 검색 기능 : 검색어(query) / 카테고리(catetory)
  function searchData(search = '', category = '') {
    return data
      .filter(({ title }) => {
        title = title.toLowerCase()
        if (title === 'womens') return title.includes('womens')
        return title.includes(category)
      })
      .map(({ items }) => items)
      .flat()
      .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
  }

  // 화면 렌더링 기능
  function renderView(data) {
    // 템플릿 리터럴
    const template = data.reduce((template, { id, imageUrl, name, price }) => {
      return template + `
        <li>
          <figure data-product-id="${id}">
            <img src="${imageUrl}" alt="" width="100" height="100" />
            <figcaption>
              <strong>${name}</strong><br />
              <span>${price.toLocaleString()}원</span>
            </figcaption>
          </figure>
        </li>
      `
    }, '')

    // DOM에 반영
    products.innerHTML = template

    productsCount.textContent = data.length
  }

  // 오류 표시 기능
  function handleError(error) {
    errorLogElement.hidden = false
    errorLogElement.textContent = error.message
  }

  // 로딩 초기 상태 복구 기능
  function resetLoading() {
    // console.log('약속이 이행되든 거절되든 항상 실행!')
    loadingElement.textContent = '데이터 로딩이 완료되었습니다.'
    setTimeout(() => {
      loadingElement.hidden = true
    }, 800)
  }

})()
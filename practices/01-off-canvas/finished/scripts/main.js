// --------------------------------------------------------------------------
// 📌 실습 진행 (완료)
// --------------------------------------------------------------------------

// 1. 버튼에 이벤트 리스너를 추가합니다.
const body = document.body
const siteContainer = document.querySelector('.site-container')
const toggleOffsiteButton = siteContainer.querySelector('button')
const OFFSITE_OPEN_CLASSNAME = 'offsite-is-open'

toggleOffsiteButton.addEventListener('click', handleToggleOffsite)

function handleToggleOffsite() {
  // 2. 버튼을 클릭하면 화면을 오른쪽으로 밀어줍니다.
  // 3. 버튼을 다시 클릭하면 화면을 왼쪽으로 밀어 넣습니다.
  // 2 + 3 = 버튼을 클릭할 때마다 화면을 오른쪽 또는 왼쪽으로 이동시키는 토글을 진행합니다.
  body.classList.toggle(OFFSITE_OPEN_CLASSNAME)
}

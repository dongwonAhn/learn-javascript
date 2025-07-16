
function delay(timeout = 1000, forceReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (forceReject) reject(new Error(`❌ ${timeout/1000}초 뒤에 리젝트 됨`))
        resolve(`✅ ${timeout/1000}초 뒤에 리졸브 됨`)
    }, timeout)
  })
}

// 모듈
const module = { delay }

// 모듈 기본 내보내기
// export default module
export default module
// --------------------------------------------------------------------------
// 📌 멀티 리소스 요청
// --------------------------------------------------------------------------

function delay(timeout = 1000, forceReject = false) {
  return new Promise((resolve, reject) => {
    // 웹 브라우저 타이머 API
    setTimeout(() => {
      if (forceReject) reject(new Error(`❌ ${timeout/1000}초 뒤에 리젝트 됨`))
      resolve(`✅ ${timeout/1000}초 뒤에 리졸브 됨`)
    }, timeout)
  })
}

function getRandomTime(min = 1000, max = 3000) {
  return Math.round(Math.random() * (max - min) + min)
}

// 개별 요청의 경우, 어떤 것이 먼저 끝날 지 아무도 모른다.
// 그러므로 모든 요청이 종료된 상황을 파악하는 것이 쉽지 않다.
;(() => {

  // 비동기 요청 1
  delay(getRandomTime())
    .then((response) => {
      console.log('1', response)
    })
    .catch(console.error)
  
  // 비동기 요청 2
  delay(getRandomTime())
    .then((response) => {
      console.log('2', response)
    })
    .catch(console.error)

  // 비동기 요청 3
  delay(getRandomTime())
    .then((response) => {
      console.log('3', response)
    })
    .catch(console.error)

})

// Promise.all() 메서드를 사용해 전달된 
// Promise 객체의 집합(배열)을 확인해 모두 완료되면 콜백을 실행한다.
;(() => {
  
  const promise3 = delay(getRandomTime(3000, 7000))
  const promise2 = delay(getRandomTime())
  const promise1 = delay(getRandomTime(2000, 4000))

  const promiseList = [promise1, promise2, promise3]
  
  const promiseAll = Promise.all(promiseList)
  // console.log(promise)

  promiseAll
    .then(([resolve1, resolve2, resolve3]) => { 
      console.log(resolve1)
      console.log(resolve2)
      console.log(resolve3)
    })
    .catch(console.error)

})

/* global axios */

;(() => {
  
  const randomPostId = Math.floor(Math.random() * 100)
  console.log({randomPostId})

  axios.get(`https://dummyjson.com/posts/${randomPostId}`)
    .then(({ data: post }) => {
      const { id, userId } = post
      console.log({post, id, userId })

      // 멀티 리소스 요청
      Promise.all([
        axios.get(`https://dummyjson.com/users/${userId}?select=firstName,lastName,email`),
        axios.get(`https://dummyjson.com/comments/post/${id}`),
      ])
        .then(([userResponse, commentResponse]) => {
          const { data: user } = userResponse
          const { data: { comments } } = commentResponse

          console.log({ user, comments })
        })
        .catch(console.error)
    })


})()
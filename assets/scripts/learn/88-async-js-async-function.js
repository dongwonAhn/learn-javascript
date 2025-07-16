// --------------------------------------------------------------------------
// 📌 JavaScript 모듈(Modules)
//   - 특정 모듈을 특정 파일(모듈)에서 사용하고자 한다면?
//   - 특정 파일이 모듈 파일임을 브라우저에 알려줘야 함
// --------------------------------------------------------------------------

// 모듈 스코프(Module Scope)

// 외부의 오픈 소스 라이브러리 불러오기
// import gsap from 'https://esm.sh/gsap'
import axios from 'https://esm.sh/axios'
// import DOMPurify from 'https://esm.sh/purify'

// 외부의 기본 모듈을 불러오기
// import default module
import delayModule from '../utils/delay.js'
// import { delay } from '../utils/delay.js'

// 외부의 이름이 부여된 모듈 불러오기
// import namted module
// import { getRandomTime, PI } from '../utils/get-random-time.js'
import { getRandomTime } from '../utils/get-random-time.js'

// 모든 모듈을 별칭으로 불러오기
// import * as randomTime from '../utils/get-random-time.js'

// delayModule.delay().then((resolveValue) => {
//   console.log(resolveValue)
// })

// console.log(getRandomTime)
// console.log(randomTime)
// console.log(PI)

// --------------------------------------------------------------------------
// 📌 비동기 함수 (async / await)
//   - delay()
//   - getRandomTime()
// --------------------------------------------------------------------------

const { delay } = delayModule

// 일반(동기) 함수
;(function () {
  const delayTime = getRandomTime(500, 1000)

  console.log(1)

  // 비동기 요청
  let promise = delay(delayTime).then((message) => {
    console.log('async 1', message)
    return delay(delayTime)
  })

  console.log(2)

  promise = promise.then((message) => {
    console.log('async 2',message)
    return delay(delayTime)
  })

  console.log(3)

  promise = promise.then((message) => {
    console.log('async 3',message)
    return delay(delayTime)
  })

  console.log(4)

  promise = promise.then((message) => {
    console.log('async 4',message)
    return delay(delayTime)
  })

  console.log(5)

  promise.then((message) => {
    console.log('async 5',message, '끝')
  })

  console.log(6)

})

// 비동기 함수
// 비동기 처리를 마치 동기 코드인 것처럼 처리할 수 있다.
;(async function () {

  const delayTime = getRandomTime(500, 1000)
  
  console.log(1)

  // 비동기 요청
  // await는 delay(Promise)가 완료될 때까지 기다림
  let message = await delay(delayTime)
  console.log('async 1', message)

  console.log(2)

  message = await delay(delayTime)
  console.log('async 2', message)

  console.log(3)

  message = await delay(delayTime)
  console.log('async 3', message)

  console.log(4)

  message = await delay(delayTime)
  console.log('async 4', message)

  console.log(5)

  message = await delay(delayTime)
  console.log('async 5', message)

  console.log(6)

  message = await delay(delayTime)
  console.log('async 6', message)

})

// 포스트를 요청
// 포스트 id, userId
// 멀티 리소스 요청

const randomPostId = Math.floor(Math.random() * 100)

requestPostAndUserAndComments(randomPostId)

// 비동기 함수
async function requestPostAndUserAndComments() {

  const { data: post } = await axios.get(`https://dummyjson.com/posts/${randomPostId}`)
  const { id: postId, userId } = post
  console.log({ postId, userId })

  // 멀티 리소스 요청
  const [userResponse, commentResponse] = await Promise.all([
    axios.get(`https://dummyjson.com/users/${userId}?select=firstName,lastName,email`),
    axios.get(`https://dummyjson.com/comments/post/${postId}`),
  ])

  const { data: user } = userResponse
  const { data: { comments } } = commentResponse

  console.log({ user, comments })

}
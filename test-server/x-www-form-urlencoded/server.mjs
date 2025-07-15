import express from 'express'

const app = express()
const PORT = 4000

app.use(express.urlencoded({ extended: true }))

app.post('/submit', (request, response) => {
  console.log(request.body)

  const responseData = { ...request.body, password: '********' }
  response.status(200).json(responseData)
})

app.listen(PORT, () => {
  console.log(`테스트 서버가 http://localhost:${PORT} 에서 실행 중입니다.`)
})

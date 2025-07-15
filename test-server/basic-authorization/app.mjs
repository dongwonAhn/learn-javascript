import express from 'express'

const app = express()
const PORT = 4000

// 인증 정보
const USERNAME = 'yamoo9'
const PASSWORD = 'qwerty'

// 인증 미들웨어
function basicAuth(req, res, next) {
  const authHeader = req.headers['authorization']
  
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    res.set('WWW-Authenticate', 'Basic realm="Test Area"')
    return res.status(401).send('인증이 필요합니다.')
  }

  // "Basic base64(id:pw)" 에서 base64 부분만 추출
  const base64Credentials = authHeader.split(' ')[1]
  // eslint-disable-next-line no-undef
  const credentials = Buffer.from(base64Credentials, 'base64').toString('utf8')
  const [username, password] = credentials.split(':')

  if (username === USERNAME && password === PASSWORD) {
    next()
  } else {
    res.set('WWW-Authenticate', 'Basic realm="Test Area"')
    return res.status(401).send('인증이 실패했습니다.')
  }
}

// 기본 인증이 필요한 라우트
app.get('/', basicAuth, (req, res) => {
  res.send('인증 성공! 환영합니다 🎉')
})

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`)
})
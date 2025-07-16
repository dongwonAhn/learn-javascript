// 모듈을 이름으로 내보내기
// export named module

export function getRandomTime(min = 1000, max = 3000) {
  return Math.round(Math.random() * (max - min) + min)
}

export const PI = 3.141592
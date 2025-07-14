/* eslint-disable no-unused-vars */

function rgbToHex(rgbValue) {
  const result = rgbValue.match(/^rgb\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i)
  if (!result) return null

  const toHex = (n) => Number(n).toString(16).padStart(2, '0')
  const r = toHex(result[1])
  const g = toHex(result[2])
  const b = toHex(result[3])
  return `#${r}${g}${b}`
}
/**
 * dateFormat
 * @param {*} value 
 * @param {*} type 
 * @return
 */
const dateFormat = (value, type) => {
  if (value) {
    value = Number(value)
  } else {
    return '-'
  }
  const date = new Date(value)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  month = month < 10 ? `0${month}` : `${month}`
  let day = date.getDate()
  day = day < 10 ? `0${day}` : `${day}`
  if (type === 'date') return `${year}-${month}-${day}`
  let houer = date.getHours()
  houer = houer < 10 ? `0${houer}` : `${houer}`
  let minute = date.getMinutes()
  minute = minute < 10 ? `0${minute}` : `${minute}`
  let second = date.getSeconds()
  second = second < 10 ? `0${second}` : `${second}`
  if (type === 'datetime') return `${year}-${month}-${day} ${houer}:${minute}:${second}`
}

/**
 * dateToTimestamp
 * @param {*} date 
 */
const dateToTimestamp = date => {
  if (!date) return '-'
  return Date.parse(new Date(`${date.replace(/-/g, '/')} 00:00:00`))
}

export {
  dateFormat,
  dateToTimestamp
}
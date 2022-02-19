import dayjs from 'dayjs'
export function getRemainingTime(timestamps) {
  const timestampDayjs = dayjs(timestamps)
  const nowDayjs = dayjs()
  return {
    seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
    minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
    hours: getRemainingHours(nowDayjs, timestampDayjs),
    days: getRemainingDays(nowDayjs, timestampDayjs),
  }
}
function getRemainingSeconds(nowDayjs, timestampDayjs) {
  const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60
  return padWithZero(seconds, 2)
}
function getRemainingMinutes(nowDayjs, timestampDayjs) {
  const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60
  return padWithZero(minutes, 2)
}
function getRemainingHours(nowDayjs, timestampDayjs) {
  const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24
  return padWithZero(hours, 2)
}
function getRemainingDays(nowDayjs, timestampDayjs) {
  const days = timestampDayjs.diff(nowDayjs, 'days')
  return padWithZero(days, 2)
}

function padWithZero(number, minLength) {
  const numberString = number.toString()
  if (numberString.length >= minLength) return numberString
  return '0'.repeat(minLength - numberString.length) + numberString
}

import dayjs, { Dayjs } from 'dayjs'
import duration, { Duration } from 'dayjs/plugin/duration'
dayjs.extend(duration)

export const getTimeDiff = (timeToCompare: Dayjs) => {
  const timeDiffDuration: Duration = dayjs.duration(dayjs().diff(timeToCompare))
  const yearDiff: number = parseInt(timeDiffDuration.format('Y'))
  const monthDiff: number = parseInt(timeDiffDuration.format('M'))
  const dayDiff: number = parseInt(timeDiffDuration.format('D'))
  const hourDiff: number = parseInt(timeDiffDuration.format('H'))
  const minuteDiff: number = parseInt(timeDiffDuration.format('m'))
  const secondDiff: number = parseInt(timeDiffDuration.format('s'))

  if (yearDiff > 0) {
    return `${yearDiff}년 전`
  } else if (monthDiff > 0) {
    return `${monthDiff}달 전`
  } else if (dayDiff > 0) {
    return `${dayDiff}일 전`
  } else if (hourDiff > 0) {
    return `${hourDiff}시간 전`
  } else if (minuteDiff > 0) {
    return `${minuteDiff}분 전`
  } else if (secondDiff > 0) {
    return `${secondDiff}일 전`
  } else {
    return ''
  }
}

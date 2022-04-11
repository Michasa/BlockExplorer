import dayjs from 'dayjs'

var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

export const hexToNumber = hexidecimal => parseInt(hexidecimal, 16)

export const readableTime = timestamp => {
  return dayjs.unix(timestamp).fromNow()
}

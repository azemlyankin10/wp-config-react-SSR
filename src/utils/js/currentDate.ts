import { formatDistanceToNowStrict } from 'date-fns'

export const currentDate = (sec: number): string => {  
  if(typeof sec !== 'number') return ''
  
  const ms = sec * 1000
  return formatDistanceToNowStrict(new Date(ms), { addSuffix: true })
}




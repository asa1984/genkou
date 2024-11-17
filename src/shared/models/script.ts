import type { TZDate } from '@date-fns/tz'
import type { Duration } from 'date-fns'

export interface Script {
  id: string
  title: string
  content: string
  timer: Duration | null
  timerId: string | null
  createdAt: TZDate
  updatedAt: TZDate
}

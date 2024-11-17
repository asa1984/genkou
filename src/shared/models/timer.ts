import type { Duration } from 'date-fns'

export interface Timer {
  id: string
  timerInterval: TimerInterval
}

export interface TimerInterval {
  timer: Duration
  intervals: TimerInterval[]
}

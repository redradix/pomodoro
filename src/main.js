const DEFAULT_DURATION = 25
const DEFAULT_BREAK_DURATION_MS = 5 * 60 * 1000

export const createPomodoro = (duration = DEFAULT_DURATION) => {
  const remainingTime = duration * 60 * 1000
  const breakTime = DEFAULT_BREAK_DURATION_MS
  let startTime
  let breakStartTime

  return {
    start: () => {
      startTime = Date.now()
    },
    getDuration: () => duration,
    getRemainingTime: () => {
      if (startTime === undefined) return remainingTime
      const elapsedTime = Date.now() - startTime
      return Math.max(remainingTime - elapsedTime, 0)
    },
    takeBreak: () => {
      breakStartTime = Date.now()
    },
    getBreakRemainingTime: () => {
      if (breakStartTime === undefined) return 0
      const elapsedTime = Date.now() - breakStartTime
      return Math.max(breakTime - elapsedTime, 0)
    },
  }
}

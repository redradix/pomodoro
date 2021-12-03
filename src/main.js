const DEFAULT_DURATION = 25

export const createPomodoro = (duration = DEFAULT_DURATION) => {
  const remainingTime = duration * 60 * 1000
  let startTime

  return {
    start: () => (startTime = Date.now()),
    getDuration: () => duration,
    getRemainingTime: () => {
      if (startTime === undefined) return remainingTime
      const elapsedTime = Date.now() - startTime
      return remainingTime - elapsedTime
    },
  }
}

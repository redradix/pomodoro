const DEFAULT_DURATION = 25

export const createPomodoro = (duration = DEFAULT_DURATION) => {
  let remainingTime = duration * 60 * 1000

  const decrementTime = () => (remainingTime = remainingTime - 1)

  return {
    start: () => decrementTime(),
    getDuration: () => duration,
    getRemainingDuration: () => remainingTime,
  }
}

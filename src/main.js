const DEFAULT_DURATION = 25

export const createPomodoro = (duration = DEFAULT_DURATION) => {
  return {
    getDuration: () => duration,
  }
}

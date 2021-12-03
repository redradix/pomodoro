import { createPomodoro } from './main.js'

describe('Create Pomodoro', () => {
  it('creates pomodoro with default duration', () => {
    const pomodoro = createPomodoro()
    expect(pomodoro.getDuration()).toEqual(25)
  })
  it('creates pomodoro with custom duration', () => {
    const pomodoro = createPomodoro(10)
    expect(pomodoro.getDuration()).toEqual(10)
  })

  it('not started pomodoro returns default time', () => {
    const pomodoro = createPomodoro()
    const duration = pomodoro.getDuration()
    expect(pomodoro.getRemainingDuration()).toEqual(duration * 60 * 1000)
  })

  it('starts pomodoro and decrements duration', () => {
    const pomodoro = createPomodoro()
    const duration = pomodoro.getDuration()
    pomodoro.start()
    expect(pomodoro.getRemainingDuration()).toBeLessThan(duration * 60 * 1000)
  })
})
